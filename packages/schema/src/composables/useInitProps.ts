
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
import { ELEMENT_TYPE } from "../types"

const INIT_PROPS_MAP: any = {
    [ELEMENT_TYPE.BASIC]: {
        'button': {
            size: 'default',
            type: 'primary',
            style: {
                width: '80px',
                height: '30px',
                border: '',
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
                width: '150px',
                height: '30px',
                border: '',
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
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
    },
    [ELEMENT_TYPE.LAYOUT]: {
        row: {
            style:{
                width: '375px',
                height: '75px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                
            }
        },
        col:{
            span:12,
            style:{
                width: '50%',
                height: '100%',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
            }
        }
    }

}


export default function useInitProps(type: string, element: string) {
    return INIT_PROPS_MAP[type]?.[element]
}