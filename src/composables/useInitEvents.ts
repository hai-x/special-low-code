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
    }

}

export default function useInitEvents(componentType: string) {
    return INIT_EVENT_MAP[componentType]
}