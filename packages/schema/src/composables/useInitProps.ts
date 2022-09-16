
// const initStyle = {
//     width: '',
//     height: '',
//     borderWidth: '',
//     borderRaduis: '',
//     fontSize: '',
//     fontWeight: '',
//     lineHeight: '',
//     textAlign: 'left',
//     position: 'absolute'
// }

const INIT_PROPS_MAP: any = {
    'button': {
        size: 'default',
        type: 'primary',
        style: {
            width: '150px',
            height: '70px',
            borderWidth: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'
        }
    },
    'input': {
        placeholder: '请输入',
        clearable: true,
        size: 'default',
        style: {
            width: '250px',
            height: '50px',
            borderWidth: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'
        }
    },
    'rate': {
        max: 5,
        style: {
            width: '150px',
            height: '50px',
            borderWidth: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'
        }
    }
}


export default function useInitProps(type: string) {
    return INIT_PROPS_MAP[type]
}