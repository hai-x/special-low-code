<template>
  <el-dialog
    :model-value="true"
    title="导入JSON"
    width="50%"
    :align-center="true"
    @close="emits('close')"
  >
    <CodeEditor v-model="code"></CodeEditor>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="warning" @click="clearCode">清空</el-button>
        <el-button type="primary" @click="confirmImport">导入</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, h } from "vue";
import { useSchema } from "@/store/schema";
import CodeEditor from "@/components/CodeEditor/index.vue";
import { ElMessage } from "element-plus";

const emits = defineEmits(["close"]);

const schemaStore = useSchema();

const code = ref<string>("");

const clearCode = () => {
  code.value = "";
};

const confirmImport = () => {
  try {
    schemaStore.importSchema(code.value);
    ElMessage({
      message: h("p", null, "操作成功！"),
      type: "success",
    });
    emits("close");
  } catch (error) {
    ElMessage({
      message: h("p", null, "操作失败，请检查错误！"),
      type: "error",
    });
  }
};
</script>

<style lang="scss" scoped></style>
