<template>
  <div class="render__wrap">
    <!-- {{ config }} -->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import RuntimeComp from "./components/RuntimeComp.vue";
import { deleteDfs, findDfs } from "@special/shared";

const config = ref<any>({});

window.runtimeApi?.emitRuntimeReady({
  add(v: any) {
    const id = v.id;
    config.value[id] = v;
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
    config.value[id][type][key] = value;

  },
  remove(id: string) {
    deleteDfs(config.value, id);
  },
  clearAll() {
    config.value = [];
  },
});
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
