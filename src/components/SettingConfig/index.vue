<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="属性" name="attr">
            <AttributeEditor></AttributeEditor>
        </el-tab-pane>
        <el-tab-pane label="事件" name="events">

        </el-tab-pane>
    </el-tabs>
</template>

<script lang='ts' setup>
import AttributeEditor from './AttributeEditor/index.vue'

import { useSchema } from '~/store/schema'
import { computed } from 'vue';
import type { TabsPaneContext } from 'element-plus'

const schemaStore = useSchema()

const activeName = computed({
    get() {
        if (schemaStore?.currentComponent)
            return 'attr'
        else
            return ''
    },
    set(v){
        return v
    }

})

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style lang="scss" scoped>

</style>