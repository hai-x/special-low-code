import type { Schema } from '../index'
import { ELEMENT_TYPE } from '../types'
import useInitProps from '../composables/useInitProps'
import useInitEvents from '../composables/useInitEvents'

export interface IElementList {
    [key: string]: Schema
}

const basicElementList: IElementList = {
    button: {
        type: 'button',
        name: '按钮',
        componentName: 'ElButton',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'button'),
        event: useInitEvents('button'),
        children: [],
    },
    input: {
        type: 'input',
        name: '输入框',
        componentName: 'ElInput',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'input'),
        event: useInitEvents('input'),
        children: [],
    },
    rate: {
        type: 'rate',
        name: '评分',
        componentName: 'ElRate',
        props: useInitProps(ELEMENT_TYPE.BASIC, 'rate'),
        event: useInitEvents('rate'),
        children: [],
    }
}
const layoutElementList: IElementList = {
    'row': {
        type: 'row',
        name: 'flex布局',
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
