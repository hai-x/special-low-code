export interface IAttrSchema {
    type: string
    key: string
    title: string
    options?: string[]
}

export enum FORM_ITEM_TYPE {
    INPUT_NUMBER = 'ElInputNumber',
    SELECT = 'ElSelect',
    INPUT = 'ElInput'
}