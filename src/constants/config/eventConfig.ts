import { IAttrSchema, FORM_ITEM_TYPE } from '~/types/attribute'

export const eventConfig: IAttrSchema[] = [
    // 事件类型
    {
        type: FORM_ITEM_TYPE.SELECT,
        key: 'eventType',
        title: '绑定事件类型',
        options: [
            {
                value: 'click',
                label: 'click'
            },
            {
                value: 'change',
                label: 'change'
            },
            {
                value: 'input',
                label: 'input'
            },
        ]
    },


]