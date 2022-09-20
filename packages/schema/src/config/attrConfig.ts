import { FORM_ITEM_TYPE } from '../types'

export type ICssConfig = {
    // 属性 对应 组件类型
    type: string
    // 属性 key
    key: string
    // 配置项对应的标题
    title: string
    // 配置项类型
    valueType:string,
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
        valueType:'String'
    },
    // 距离上部
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'top',
        title: '距离上部',
        valueType:'String'
    },

    // 宽
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'width',
        title: '宽',
        valueType:'String'
    },
    // 高
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'height',
        title: '高',
        valueType:'String'
    },
    // 边框宽度
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'border',
        title: '边框',
        valueType:'String'
    },
    // 边框圆角半径
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'borderRadius',
        title: '边框圆角半径',
        valueType:'String'
    },
    // 文字大小
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'fontSize',
        title: '文字大小',
        valueType:'String'
    },
    // 文字粗度
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'fontWeight',
        title: '文字粗度',
        valueType:'String'
    },
    // 行高
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'lineHeight',
        title: '行高',
        valueType:'String'
    },
    // 左右对齐方式
    {
        type: FORM_ITEM_TYPE.SELECT,
        key: 'textAlign',
        title: '左右对齐方式',
        valueType:'String',
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
            valueType: 'String',
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
            valueType: 'String',
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
            valueType: 'String',
            title: '默认值',
        },
    ],
    'rate': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'max',
            valueType: 'Number',
            title: '最大分值',
        },
    ],
    'row': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'columnNum',
            valueType: 'Number',
            title: '列数',
        },
    ],
    'checkbox': [
        {
            type: FORM_ITEM_TYPE.SWITCH,
            key: 'modelValue',
            valueType: 'Boolean',
            title: '绑定值',
        },
    ], 
    'colorPicker': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'modelValue',
            valueType: 'String',
            title: '绑定值',
        },
    ],
    'datePicker': [
        {
            type: FORM_ITEM_TYPE.INPUT,
            key: 'modelValue',
            valueType: 'Boolean',
            title: '绑定值',
        },
    ],
    'switch': [
        {
            type: FORM_ITEM_TYPE.SWITCH,
            key: 'modelValue',
            valueType: 'Boolean',
            title: '绑定值',
        },
    ],
}
