import { ELEMENT_TYPE } from "../types"

const INIT_PROPS_MAP: any = {
    [ELEMENT_TYPE.BASIC]: {
        'button': {
            size: 'default',
            type: 'primary',
        },
        'input': {
            placeholder: '请输入',
            clearable: true,
            size: 'default',
        },
        'rate': {
            max: 5,
        },
        'checkbox': {
            modelValue:true,
        },
        'datePicker': {
            modelValue:new Date(),
        },
        'switch': {
            modelValue:true,
        },
    },
    [ELEMENT_TYPE.LAYOUT]: {
        'row': {
            columnNum:1,
        },
        'col':{
            span:24,
        }
    }

}


export default function useInitProps(type: string, element: string) {
    return INIT_PROPS_MAP[type]?.[element]
}