const INIT_EVENT_MAP: any = {
    'button': {
        eventType: 'click',
        code: ''
    }
    ,
    'input': {
        eventType: 'input',
        code: ''
    },
    'rate': {
        eventType: 'change',
        code: ''
    },
    'checkbox': {
        eventType: 'update:modelValue',
        code: ''
    },
    'colorPicker': {
        eventType: 'update:modelValue',
        code: ''
    },
    'datePicker': {
        eventType: 'update:modelValue',
        code: ''
    },
    'switch': {
        eventType: 'update:modelValue',
        code: ''
    }

}

export default function useInitEvents(componentType: string) {
    return INIT_EVENT_MAP[componentType]
}