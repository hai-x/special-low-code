export function stringifyProps(obj: any) {
    let str = ''
    Object.keys(obj).forEach(key => {
        if (key === 'style') return
        str += ` ${key}="${obj[key]}"`
    })
    return str
}
export function stringifyCSS(obj: any) {
    if (!obj) return ''
    let str = ''
    Object.keys(obj).forEach(key => {
        if (obj[key]) str += `${key}:${obj[key]};\t`
    })
    return str
}