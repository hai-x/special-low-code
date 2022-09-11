import { defineStore } from 'pinia'
import type { Schema } from '../types';
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
        // 设置当前选中的组件
        setCurrentComponent(id: string) {
            this.currentComponent = this.schema.find((item: Schema) => item.id === id)
            this.initCurrentComponentProps = cloneDeep(this.currentComponent?.props)
            this.initCurrentComponentEvents = cloneDeep(this.currentComponent?.event)
        },
        // 删除组件
        deleteComponentById() {
            this.schema.splice(this.schema.findIndex((item: Schema) => item.id === this.currentComponent?.id), 1)
            this.currentComponent = undefined
        },
        // 更新组件的属性
        updateComponentProps(type: 'attr' | 'css' | 'event', key: string, value: string) {
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
        // 重置初始时间
        resetComponentEvents() {
            this.currentComponent!.event = this.initCurrentComponentEvents
        },
        // 初始化Schema
        resetSchema() {
            this.schema = []
        },
        // 导入Schema
        importSchema(json: string) {
            console.log(json);

            this.schema = JSON.parse(json)
        }
    }

})