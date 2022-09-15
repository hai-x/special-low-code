export default function parseCss(obj: any) {
    if (!obj) return ''
    let str = ''
    Object.keys(obj).forEach(key => {
        if (obj[key]) str += `${key}:${obj[key]};\t`
    })
    return str
}