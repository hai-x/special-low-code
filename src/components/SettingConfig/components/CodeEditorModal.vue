<template>
  <el-dialog v-model="dialogVisible" title="添加事件" width="50%" :align-center="true">
    <CodeEditor v-model="code" placeholder="console.log('test')"></CodeEditor>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="warning" @click="confirm">确定</el-button>
        <el-button type="danger" @click="clearCode">清空</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { ref, watch, h } from 'vue';
import { useSchema } from '~/store/schema';
import CodeEditor from '~/components/CodeEditor/index.vue'
import { ElMessage } from 'element-plus'

const emits = defineEmits(['confirm'])

const dialogVisible = ref(false)

const code = ref<string>(`console.log('test')`)

const clearCode = () => {
  code.value = `console.log('test')`;
}

const confirm = () => {
  emits('confirm', code.value)
  dialogVisible.value = false
  ElMessage({
    message: h('p', null, '操作成功！'),
    type: 'success',
  })
}

const handleDialogShow = () => {
  dialogVisible.value = true
}

defineExpose({ handleDialogShow })

</script>

<style lang="scss" scoped>

</style>