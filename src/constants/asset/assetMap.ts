import type { Schema } from '~/types/schema'

type AssetKey = 'button' | 'input'

type Asset = {
    [key in AssetKey]: Omit<Schema, 'id'>
}

const assetMap: Asset = {
    button: {
        componentName: 'ElButton',
        props: {},
        event: {},
        children: [],
    },
    input: {
        componentName: 'ElInput',
        props: {},
        event: {},
        children: [],
    }
}
export default assetMap