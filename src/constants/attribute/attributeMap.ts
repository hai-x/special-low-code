import type { IAttrSchema } from '~/types'
import { FORM_ITEM_TYPE } from '~/types'

export type AttributeMapType = Record<string, IAttrSchema[]>

export const cssMap: IAttrSchema[] = [
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
        key: 'borderWidth',
        title: '边框宽度',
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

export const attributeMap: AttributeMapType = {
    'button': [
        {
            type: FORM_ITEM_TYPE.SELECT,
            key: 'type',
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
            title: '默认值',
        },
    ]
}
