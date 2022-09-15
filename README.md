# special-low-code

低代码搭建

## 物料协议

```javascript
    // 字段 id 用于唯一标识字段
    id: string
    // 组件类型
    type: string
    // 对应的 element-plus 组件名
    componentName: string
    // 组件传参props
    props?: any
    // 组件事件参数
    event?: {
        eventType: string,
        code: string
    }
    // 子组件集合
    children?: Schema[]
```

左边物料区如果需要扩展组件，可以按照此协议在schema子包中进行扩展，然后在 editor子包中 AssetList 组件中进行初始化接入，比如

```javascript
button: {
    id:'xxxxxxxxx',//此字段无需设置，拖拽入渲染器时自动生成
    type: 'button',
    componentName: 'ElButton',
    props: {},
    event: {},
    children: [],
},
```

## 属性设置协议

```javascript
    // 属性所用组件名 如ElInputNumber、ElInput、ElSelect
    type: string
    // 属性的key
    key: string
    // 属性值的类型
    valueType: string,
    // 属性名
    title: string
    // 属性选项（用于ElSelect的插槽ElOption设置）
    options?: string[]
```

右边编辑器如果需要扩展组件 props 选项 或者 css 样式选项，可以按照此协议在 schema子包 中进行扩展，比如

```javascript
'input': [
    {
        type: FORM_ITEM_TYPE.INPUT,
        key: 'placeholder',
        valueType: 'string',
        title: '默认值',
    },
]
```
