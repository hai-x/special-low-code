<template>
  <el-dialog
    :model-value="true"
    title="出码"
    :fullscreen="true"
    :align-center="true"
    @close="emits('close')"
  >
    <CodeEditor v-model="code" height="500"></CodeEditor>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref,inject } from "vue";
import CodeEditor from "@/components/CodeEditor/index.vue";
import {Compiler} from "@special/compiler";

const emits = defineEmits(["close"]);

const schemaStore:any = inject('schemaStore')

const code = ref<string>("");
code.value = new Compiler(schemaStore.schema).vueSfc;
</script>

<style lang="scss" scoped></style>
