import { v4 as uuid4 } from 'uuid'

/**
 * @description 生成唯一组件 id
 */
const generateId = () => {
    return uuid4().split('-')[0]
}

export default generateId