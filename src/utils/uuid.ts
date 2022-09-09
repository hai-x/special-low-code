import { v4 as uuid4 } from 'uuid'

/**
 * @description 生成唯一组件 id
 */
export const generateId = () => {
    return uuid4()
}
