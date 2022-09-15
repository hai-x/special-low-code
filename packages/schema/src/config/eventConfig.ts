import { FORM_ITEM_TYPE } from '../index'

export interface IEventConfig {
    // 属性 对应组件类型
    type: string
    // 属性 key
    key: string
    // 配置项对应的标题
    title: string
    // 配置项为select单选的选项
    options?: {
        value: string
        label: string
    }[]
    slot?:any
    
}
type EventConfig = IEventConfig[]

export const eventConfig: EventConfig = [
    // 事件类型
    {
        type: FORM_ITEM_TYPE.SELECT,
        key: 'eventType',
        title: '绑定事件类型',
        options: [
            {
                value: 'click',
                label: 'click'
            },
            {
                value: 'change',
                label: 'change'
            },
            {
                value: 'input',
                label: 'input'
            },
        ]
    },


]