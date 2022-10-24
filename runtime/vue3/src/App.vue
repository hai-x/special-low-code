<template>
  <div class="render__wrap">
    {{ schema }}
    <RuntimeComp v-for="config in schema" :config="config"></RuntimeComp>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import RuntimeComp from "./components/RuntimeComp.vue";
import { deleteDfs, findDfs } from "@special/shared";

const schema = ref<any>([]);
const i  = ref(1)
const schemaOperator = {
  add(v: any) {
    schema.value.push(v);
  },
  update({
    id,
    type,
    key,
    value,
  }: {
    id: string;
    type: string;
    key: string;
    value: any;
  }) {
    // schema.value[0] = 1
    // let node = findDfs(schema.value, id);
    schema.value[1] = i.value++
    // console.log((node = 1));

    // node[type][key] = value;
  },
  remove(id: string) {
    deleteDfs(schema.value, id);
  },
  clearAll() {
    schema.value = [];
  },
};

window.runtimeApi?.emitRuntimeReady(schemaOperator);
</script>

<style scoped>
.render__wrap {
  z-index: 200;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
