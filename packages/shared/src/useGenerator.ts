import { generateId } from './index'
import { cloneDeep } from 'lodash-es'

/**
 * @description 负责左侧组件拖拽到画布时进行转换
 */
export default function useGenerator(field: any) {
    const _field = cloneDeep(field)

    const Component = {
        id: `${_field.type}_${generateId()}`,
        ..._field
    }

    return Component
}
