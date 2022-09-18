import { FORM_ITEM_TYPE } from '../types'

export type ICssConfig = {
    // 属性 对应 组件类型
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
}[]


// props配置类型
export interface IPropsConfig {
    // 属性 对应 组件类型
    type: string
    // 属性 key
    key: string
    // 属性 value的类型
    valueType: string
    // 配置项对应的标题
    title: string
    // 配置项为select单选的选项
    options?: {
        value: string
        label: string
    }[]

}

export type PropsConfig = {
    // key为物料名
    [key: string]: IPropsConfig[]
}

export const cssConfig: ICssConfig = [
    // 距离左部
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'left',
        title: '距离左部',
    },
    // 距离上部
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'top',
        title: '距离上部',
    },
    
    // 宽
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'width',
        title: '宽',
    },
    // 高
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'height',
        title: '高',
    },
    // 边框宽度
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'border',
        title: '边框',
    },
    // 边框圆角半径
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'borderRadius',
        title: '边框圆角半径',
    },
    // 文字大小
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'fontSize',
        title: '文字大小',
    },
    // 文字粗度
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'fontWeight',
        title: '文字粗度',
    },
    // 行高
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'lineHeight',
        title: '行高',
    },
    // 左右对齐方式
    {
        type: FORM_ITEM_TYPE.SELECT,
        key: 'textAlign',
        title: '左右对齐方式',
        options: [
            {
                value: 'left',
                label: '左边',
            },
            {
                value: 'center',
                label: '中间',
            },
            {
                value: 'right',
                label: '右边',
            },
        ]
    },
]

export const propsConfig: PropsConfig = {
    'button': [
        {
            type: FORM_ITEM_TYPE.SELECT,
            key: 'type',
            valueType: 'string',
            title: '类型',
            options: [
                {
                    value: 'primary',
                    label: 'primary',
                },
                {
                    value: 'success',
                    label: 'success',
                },
                {
                    value: 'warning',
                    label: 'warning',
                },
                {
                    value: 'danger',
                    label: 'danger',
                },
                {
                    value: 'info',
                    label: 'info',
                },
            ]
        },
        {
            type: FORM_ITEM_TYPE.SELECT,
            key: 'size',
            valueType: 'string',
            title: '尺寸',
            options: [
                {
                    value: 'large',
                    label: '大',
                },
                {
                    value: 'default',
                    label: '默认',
                },
                {
                    value: 'small',
                    label: '小',
                },
            ]
        },
    ],
    'input': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'placeholder',
            valueType: 'string',
            title: '默认值',
        },
    ],
    'rate': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'max',
            valueType: 'number',
            title: '最大分值',
        },
    ],
}
