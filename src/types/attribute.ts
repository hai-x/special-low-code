export interface IAttrSchema {
    // 属性所用组件名 如ElInputNumber、ElInput、ElSelect
    type: string
    // 属性的key
    key: string
    // 属性名
    title: string
    // 属性选项（用于ElSelect的插槽ElOption设置）
    options?: string[]
}

export enum FORM_ITEM_TYPE {
    INPUT_NUMBER = 'ElInputNumber',
    SELECT = 'ElSelect',
    INPUT = 'ElInput',
    BUTTON = 'ElButton'
}