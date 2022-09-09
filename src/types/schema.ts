import { EventType } from './index'
export type Schema = {
    // 字段 id 用于唯一标识字段
    id: number
    // 对应的 element-plus 组件名
    componentName: string
    props?: any
    event?: Record<string, EventType>
    children?: Schema[]
}