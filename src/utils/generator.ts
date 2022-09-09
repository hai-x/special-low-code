import { generateId } from './uuid'
import { cloneDeep } from 'lodash-es'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function generator(field: any) {
    const _field = cloneDeep(field)

    const { value: {
        componentName,
        props,
        children,
        event,
    } } = _field

    const Component = {
        id: generateId(),
        componentName,
        props,
        event,
        children,
    }

    return Component
}
