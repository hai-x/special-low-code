export type Schema = {
    // 字段 id 用于唯一标识字段
    id: string
    // 组件类型
    type: string
    // 对应的 element-plus 组件名
    componentName: string
    // 组件传参props
    props?: any
    // 组件事件参数
    event?: {
        eventType: string,
        code: string
    }
    // 子组件集合
    children?: Schema[]
}