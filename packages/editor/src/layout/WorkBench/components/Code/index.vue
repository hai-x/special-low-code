<template>
  <div class="editor__wrap">
    <CodeEditor
      v-model="code"
      placeholder="Use 'var' to declare variable..."
      height="1000"
    ></CodeEditor>
  </div>
</template>

<script lang="ts" setup>
import CodeEditor from "@/components/CodeEditor/index.vue";
import { inject, ref, watch } from "vue";
import { debounce } from "lodash-es";
const sandBox: any = inject("sandBox");

const code = ref("");

const debounceCode = debounce((v: string) => {
  sandBox.run(v);
}, 1000);
watch(code, debounceCode);

</script>

<style lang="scss" scoped>
.editor__wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
