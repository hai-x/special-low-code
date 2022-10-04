import { ELEMENT_TYPE, elementList } from '@special/schema'

export function isLayoutComp(compType: string) {
    return elementList[ELEMENT_TYPE.LAYOUT].hasOwnProperty(compType)
}
export function isBasicComp(compType: string) {
    return elementList[ELEMENT_TYPE.BASIC].hasOwnProperty(compType)
}

