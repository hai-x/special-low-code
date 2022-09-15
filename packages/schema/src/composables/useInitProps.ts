const initStyle = {
    width: '',
    height: '',
    borderWidth: '',
    borderRaduis: '',
    fontSize: '',
    fontWeight: '',
    lineHeight: '',
    textAlign: 'left'
}

const INIT_PROPS_MAP: any = {
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
    }
}

for (let k of Object.keys(INIT_PROPS_MAP)) {
    (INIT_PROPS_MAP[k] as any).style = { ...initStyle }
}


export default function useInitProps(type: string) {
    return INIT_PROPS_MAP[type]
}