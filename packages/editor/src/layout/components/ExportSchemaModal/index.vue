<template>
  <el-dialog
    :model-value="true"
    title="导出JSON"
    width="50%"
    :align-center="true"
    @close="emits('close')"
  >
    <CodeEditor v-model="code"></CodeEditor>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed,inject } from "vue";
import CodeEditor from "@/components/CodeEditor/index.vue";

const emits = defineEmits(["close"]);

const schemaStore:any = inject('schemaStore');

const code = computed(() => JSON.stringify(schemaStore.schema, null, "\t"));
</script>

<style lang="scss" scoped></style>
