export default function findFfs(arr: any, id:string): any {
    for (let o of arr || []) {
        if (o.id == id) return o
        const o_ = findFfs(o.children, id)
        if (o_) return o_
    }
}