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
import { computed } from "vue";
import { useSchema } from "~/store/schema";
import CodeEditor from "~/components/CodeEditor/index.vue";

const emits = defineEmits(["close"]);

const schemaStore = useSchema();

const code = computed(() => JSON.stringify(schemaStore.schema, null, "\t"));
</script>

<style lang="scss" scoped></style>
