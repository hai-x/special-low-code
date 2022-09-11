<template>
    <el-dialog v-model="dialogVisible" title="预览" :fullscreen="true" :align-center="true">
        <template v-for="(item,index) in schema" :key="index">
            <component :is="item.componentName" v-bind="{...item.props,...item.event} ">
                {{ item.type }}
            </component>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue';
import { useSchema } from '~/store/schema';

const dialogVisible = ref(false)
const schemaStore = useSchema()

const schema = ref<any>([])

watch(() => schemaStore.schema, (val) => {
    schema.value = val.map((i: any) => {
        const { eventType, code } = i?.event
        const key = 'on' + eventType[0].toUpperCase() + eventType.slice(1)
        i.event[key] = new Function(code)
        return i
    })
}, {
    immediate: true,
    deep: true
})

const handleDialogShow = () => {
    dialogVisible.value = true
}

defineExpose({ handleDialogShow })

</script>

<style lang="scss" scoped>

</style>