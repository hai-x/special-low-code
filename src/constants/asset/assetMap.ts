import type { Schema } from '~/types/schema'
import useInitProps from '~/composables/useInitProps'

type AssetKey = 'button' | 'input'

type Asset = {
    [key in AssetKey]: Omit<Schema, 'id'>
}

const assetMap: Asset = {
    button: {
        type: 'button',
        componentName: 'ElButton',
        props: useInitProps('button'),
        event: {},
        children: [],
    },
    input: {
        type: 'input',
        componentName: 'ElInput',
        props: useInitProps('input'),
        event: {},
        children: [],
    }
}
export default assetMap