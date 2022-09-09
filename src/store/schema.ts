import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useSchema = defineStore('schema', {
    state: () => ({
        schema: []
    }),
    actions: {
        addSchema() {
            console.log(11);

        },
        deleteSchema() {
            console.log(22);
        },
    }

})