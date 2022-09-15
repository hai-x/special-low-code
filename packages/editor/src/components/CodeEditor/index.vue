<template>
  <Codemirror
    v-model="model"
    :placeholder="placeholder"
    :style="{ height: `${height}px` }"
    :autofocus="true"
    :extensions="extensions"
  >
  </Codemirror>
</template>

<script lang="ts" setup>
import { Codemirror } from "vue-codemirror";
import { computed } from "vue";
import { oneDark } from "@codemirror/theme-one-dark";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Please code your schema here ...",
  },
  height: {
    type: String,
    default: 400,
  },
});
const emits = defineEmits(["update:modelValue"]);

const extensions = [oneDark];

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val: any) {
    emits("update:modelValue", val);
  },
});
</script>

<style lang="scss" scoped>
.editor__wrapper {
  height: 600px;
}
</style>
