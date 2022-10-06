export function findDfs(arr: any, id: string): any {
    for (let o of arr || []) {
        if (o.id == id) return o
        const o_ = findDfs(o.children, id)
        if (o_) return o_
    }
}

export function deleteDfs(arr: any, id: string): any {
    for (let i in arr) {
        if (arr[i].id === id) {
            arr.splice(i, 1)
            return
        }
        arr[i].children && deleteDfs(arr[i].children, id);
    }
}