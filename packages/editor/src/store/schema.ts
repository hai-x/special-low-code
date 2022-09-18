import { defineStore } from 'pinia'
import type { Schema } from '@special/schema';
import { cloneDeep } from 'lodash-es'

interface IState {
    schema: Schema[],
    currentComponent: Schema | undefined,
    initCurrentComponentProps: any,
    initCurrentComponentEvents: any,
}

export const useSchema = defineStore('schema', {
    state: () => ({
        schema: [],
        currentComponent: undefined,
        initCurrentComponentProps: undefined,
        initCurrentComponentEvents: undefined
    }) as IState,
    actions: {
        // 设置Schema
        setSchema(v: Schema[]) {
            this.schema = v
        },
        // schema增加组件（宏）
        pushComponentToSchema(v: Schema) {
            this.schema.push(v)
        },
        // schema增加组件（微）
        pushComponentToItem(v: Schema,id:string,columnIndex:number) {
            this.schema.find(i => i.id === id)?.children?.[columnIndex].children!.push(v)
        },
        // 设置当前选中的组件
        setCurrentComponent(id: string) {
            this.currentComponent = this.schema.find((item: Schema) => item.id === id)
            this.initCurrentComponentProps = cloneDeep(this.currentComponent?.props)
            this.initCurrentComponentEvents = cloneDeep(this.currentComponent?.event)
        },
        // 清楚当前组件选中态
        clearCurrentComponent() {
            this.currentComponent = undefined
        },
        // 删除选中组件
        deleteComponentById() {
            this.schema.splice(this.schema.findIndex((item: Schema) => item.id === this.currentComponent?.id), 1)
            this.currentComponent = undefined
        },
        // 更新组件的属性
        updateComponentProps(type: 'attr' | 'css' | 'event', key: string, value: any) {
            switch (type) {
                case 'attr':
                    this.currentComponent!.props[key] = value
                    break;
                case 'css':
                    this.currentComponent!.props.style[key] = value
                    break;
                case 'event':
                    (this.currentComponent as any).event[key] = value
                    break;
                default:
                    break;
            }
        },
        // 重置初始属性
        resetComponentProps() {
            this.currentComponent!.props = this.initCurrentComponentProps
        },
        // 重置初始事件
        resetComponentEvents() {
            this.currentComponent!.event = this.initCurrentComponentEvents
        },
        // 初始化Schema
        resetSchema() {
            this.schema = []
        },
        // 导入Schema
        importSchema(json: string) {
            this.schema = JSON.parse(json)
        },
    }

})