import type { Schema } from '~/types/schema'
import useInitProps from '~/composables/useInitProps'
import useInitEvents from '~/composables/useInitEvents'

type Asset = {
    [key: string]: Omit<Schema, 'id'>
}

const assetMap: Asset = {
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
export default assetMap