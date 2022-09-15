interface GroupOptions {
    // 从列表中拖拽元素出去时的行为
    // clone 表示拖拽元素出去时是复制该元素到别的列表中而不是移动
    // boolean 表示是否允许拖拽到别的列表
    // string[] 表示允许拖拽到哪个 group 的列表中
    pull: 'clone' | boolean | string[]
    // 描述列表中是否允许放入别的元素
    // string[] 表示只允许指定 group 列表中的元素放入
    put: boolean | string[]
}

export const createGroup = (name: string, options: GroupOptions) => ({
    name,
    pull: options.pull,
    put: options.put,
})

export const assetListGroup = createGroup('render', {
    pull: 'clone',
    put: false,
})

export const renderGroup = createGroup('render', {
    pull: false,
    put: true,
})
