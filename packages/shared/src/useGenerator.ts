import { generateId } from './index'
import { cloneDeep } from 'lodash-es'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function useGenerator(field: any) {
    const _field = cloneDeep(field)

    const { value: {
        type,
        componentName,
        props,
        children,
        event,
    } } = _field

    const Component = {
        id: generateId(),
        type,
        componentName,
        props,
        event,
        children,
    }

    return Component
}
