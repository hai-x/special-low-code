export default function parseProp(obj: any) {
    let str = ''
    Object.keys(obj).forEach(key => {
        if (key === 'style') return
        str += ` ${key}="${obj[key]}"`
    })
    return str
}