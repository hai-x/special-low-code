import { defineStore } from 'pinia'
import type { Schema } from '../types';
import { cloneDeep } from 'lodash-es'

interface IState {
    schema: Schema[],
    currentComponent: Schema | undefined,
    initCurrentComponentProps: any,
}

export const useSchema = defineStore('schema', {
    state: () => ({
        schema: [],
        currentComponent: undefined,
        initCurrentComponentProps: undefined
    }) as IState,
    actions: {
        // 设置当前选中的组件
        setCurrentComponent(id: string) {
            this.currentComponent = this.schema.find((item: Schema) => item.id === id)
            this.initCurrentComponentProps = cloneDeep(this.currentComponent?.props)
        },
        // 删除组件
        deleteComponentById() {
            this.schema.splice(this.schema.findIndex((item: Schema) => item.id === this.currentComponent?.id), 1)
            this.currentComponent = undefined
        },
        // 更新组件的属性
        updateComponentProps(type: 'attr' | 'css', key: string, value: string) {
            switch (type) {
                case 'attr':
                    this.currentComponent!.props[key] = value
                    break;
                case 'css':
                    this.currentComponent!.props.style[key] = value
                    break;
                default:
                    break;
            }
        },
        // 重置为组件的初始属性
        resetComponentProps() {
            this.currentComponent!.props = this.initCurrentComponentProps
        },
        // 初始化Schema
        resetSchema() {
            this.schema = []
        },
        importSchema(json: string) {
            console.log(json);

            this.schema = JSON.parse(json)
        }
    }

})