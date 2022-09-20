import type { Schema } from '../index'
import { ELEMENT_TYPE } from '../types'
import useInitProps from '../composables/useInitProps'
import useInitEvents from '../composables/useInitEvents'

export interface IElementList {
    [key: string]: Schema
}

const basicElementList: IElementList = {
    'button': {
        type: 'button',
        name: '按钮',
        componentName: 'ElButton',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'button'),
        event: useInitEvents('button'),
        children: [],
    },
    'input': {
        type: 'input',
        name: '输入框',
        componentName: 'ElInput',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'input'),
        event: useInitEvents('input'),
        children: [],
    },
    'checkbox': {
        type: 'checkbox',
        name: '多选框',
        componentName: 'ElCheckbox',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'checkbox'),
        event: useInitEvents('checkbox'),
        children: [],
    },
    'rate': {
        type: 'rate',
        name: '评分',
        componentName: 'ElRate',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'rate'),
        event: useInitEvents('rate'),
        children: [],
    },
    'colorPicker': {
        type: 'colorPicker',
        name: '取色器',
        componentName: 'ElColorPicker',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'colorPicker'),
        event: useInitEvents('colorPicker'),
        children: [],
    },
    'datePicker': {
        type: 'datePicker',
        name: '日期选择器',
        componentName: 'ElDatePicker',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'datePicker'),
        event: useInitEvents('datePicker'),
        children: [],
    },
    'switch': {
        type: 'switch',
        name: '开关',
        componentName: 'ElSwitch',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'switch'),
        event: useInitEvents('switch'),
        children: [],
    },
}
export const layoutElementList: IElementList = {
    'card':{
        type: 'card',
        name: '卡片',
        componentName: 'ElCard',
        props: useInitProps(ELEMENT_TYPE.LAYOUT, 'card'),
        event: useInitEvents('card'),
        children: [
            
        ],
    },
    'row': {
        type: 'row',
        name: '行(flex)',
        componentName: 'ElRow',
        props: useInitProps(ELEMENT_TYPE.LAYOUT, 'row'),
        event: useInitEvents('row'),
        children: [
            {
                type: 'col',
                name: '列',
                componentName: 'ElCol',
                props: useInitProps(ELEMENT_TYPE.LAYOUT, 'col'),
                event: useInitEvents('row'),
                children: [],
            }
        ],
    },
}

export const elementList = {
    [ELEMENT_TYPE.BASIC]: basicElementList,
    [ELEMENT_TYPE.LAYOUT]: layoutElementList,
}
