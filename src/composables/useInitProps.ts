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
    }
}

for (let [k, v] of Object.entries(INIT_PROPS_MAP)) {
    (v as any).style = { ...initStyle }
}


export default function useInitProps(type: string) {
    return INIT_PROPS_MAP[type]
}