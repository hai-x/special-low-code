import type { Schema } from '../index'
import useInitProps from '../composables/useInitProps'
import useInitEvents from '../composables/useInitEvents'

export interface IElementConfig {
    [key: string]: Omit<Schema, 'id'>
}

export const elementConfig: IElementConfig = {
    button: {
        type: 'button',
        componentName: 'ElButton',
        props: useInitProps('button'),
        event: useInitEvents('button'),
        children: [],
    },
    input: {
        type: 'input',
        componentName: 'ElInput',
        props: useInitProps('input'),
        event: useInitEvents('input'),
        children: [],
    },
    rate: {
        type: 'rate',
        componentName: 'ElRate',
        props: useInitProps('rate'),
        event: useInitEvents('rate'),
        children: [],
    }
}
