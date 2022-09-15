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
import { ref } from "vue";
import { useSchema } from "@/store/schema";
import CodeEditor from "@/components/CodeEditor/index.vue";
import {Compiler} from "../../../../../compiler/src/index";

const emits = defineEmits(["close"]);

const schemaStore = useSchema();

const code = ref<string>("");
code.value = new Compiler(schemaStore.schema).vueSfc;
</script>

<style lang="scss" scoped></style>
