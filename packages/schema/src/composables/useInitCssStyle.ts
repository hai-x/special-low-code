import { ELEMENT_TYPE } from "../types"

const INIT_CSSSTYLE_MAP: any = {
    [ELEMENT_TYPE.BASIC]: {
        'button': {
            width: '80px',
            height: '30px',
            border: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'
        },
        'input': {
            width: '150px',
            height: '30px',
            border: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'

        },
        'rate': {
            width: '150px',
            height: '50px',
            border: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'

        },
        'checkbox': {
            width: '100px',
            height: '20px',
            border: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'

        },
        'datePicker': {
            width: '150px',
            height: '20px',
            border: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'

        },
        'switch': {
            width: '40px',
            height: '20px',
            border: '',
            borderRaduis: '',
            fontSize: '',
            fontWeight: '',
            lineHeight: '',
            position: 'absolute'

        },
    },
    [ELEMENT_TYPE.LAYOUT]: {
        'row': {
            width: '100%',
            height: '75px',
            position: 'absolute',

        },
        'col': {
            width: '50%',
            height: '100%',

        }
    }

}


export default function useInitCssStyle(type: string, element: string) {
    return INIT_CSSSTYLE_MAP[type]?.[element]
}