<template>
    <el-dialog v-model="dialogVisible" title="导出JSON" width="50%" :align-center="true">
        <CodeEditor v-model="code"></CodeEditor>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue';
import { useSchema } from '~/store/schema';
import CodeEditor from '~/components/CodeEditor/index.vue'

const dialogVisible = ref(false)

const schemaStore = useSchema()

const handleDialogShow = () => {
    dialogVisible.value = true
}

const code = ref<string>('')

watch(() => schemaStore.schema, (v: any) => {
    if (v.length) {
        code.value = JSON.stringify(schemaStore.schema, null, '\t')
    }
})

defineExpose({ handleDialogShow })

</script>

<style lang="scss" scoped>

</style>