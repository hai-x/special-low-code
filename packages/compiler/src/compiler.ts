/**
    开始
    Schema:{
        children:Array[0]
        componentName:"ElInput"
        event:{}
        id:"bf894e14-ba84-49ca-9245-a9ccdf2207df"
        props:{}
        type:"input"
    }
 */
/**
    结束
    <template></template>
    <script></script>
    <style></style>
 */

import { parseProp, parseCss } from './index'
import { Schema } from '@special/schema'

export default class Compiler {
    // schema
    schema = null
    // 编译结果
    compilerResult = {
        template: '',
        script: '',
        style: ''
    }
    // 编译输出
    vueSfc = ''
    constructor(schema: any) {
        this.schema = schema
        this.compileSchema()
        this.combineResult()
    }
    compilerSchemaItem(schemaItem: Schema, importScript: string[], cssScript: string[]) {
        let template

        template = this.dfsTemplate(schemaItem, cssScript)

        this.dfsImportScript(schemaItem, importScript)

        return template
    }
    dfsTemplate(item: Schema, cssScript?: string[]) {
        const { children, props, event, componentName, id } = item
        const { style } = props

        const propsStr = parseProp(props)
        const classStr = `class="${id.split('-')[0]}"`
        cssScript?.push(this.handleCssStyle(id, style))

        const eventKey = 'on' + event?.eventType?.[0]?.toUpperCase() + event?.eventType?.slice(1)
        const eventStr = event?.eventType && event?.code ? eventKey + '=' + event.code : ''
        let childrenStr = ''
        if (Array.isArray(children)) {
            children.forEach((i: Schema) => {
                childrenStr += this.dfsTemplate(i)
            })
        }
        let startTemplate = (componentName + ' ' + classStr + ' ' + propsStr + ' ' + eventStr + ' ').trim()
        return `
    <${startTemplate}>
            ${childrenStr}
    <${componentName}/>\t`
    }
    dfsImportScript(item: Schema, importScript: string[]) {
        const { componentName, children } = item
        if (componentName && !importScript.includes(`${item.componentName}`)) {
            importScript.push(`${item.componentName}`)
        }
        if (children) {
            children.forEach((item: Schema) => {
                this.dfsImportScript(item, importScript)
            })
        }
    }
    compileSchema() {
        let importScript: string[] = []
        let cssScript: string[] = []
        let finalTemplate: string = ''

        Array.isArray(this.schema) && (this.schema as Array<Schema>).forEach((i: Schema) => {
            finalTemplate += this.compilerSchemaItem(i, importScript, cssScript)
        })

        this.compilerResult.template = `
<template>
    ${finalTemplate}
</template>`
        this.compilerResult.script += `
<script>
    import { ${importScript.join(', ')} } from 'element-plus 
</script>`
        this.compilerResult.style = `
<style>
${cssScript.join('\n').trim()}
</style>`
    }
    handleCssStyle(id: string, style: any) {
        return `.${id.split('-')[0]}{
            ${parseCss(style)}
        }`
    }
    combineResult() {
        this.vueSfc = `
${this.compilerResult.template}

${this.compilerResult.script}

${this.compilerResult.style}
        `.trim()
    }
}
