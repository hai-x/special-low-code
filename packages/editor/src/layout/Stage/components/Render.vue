<template>
  <div class="frame_wrap" ref="frameWrapRef"></div>
</template>

<script lang="ts" setup>
import StageRender from "@/composables/StageRender";
import { onMounted, ref } from "vue";
const frameWrapRef = ref(null);
let stageRender = new StageRender();

stageRender.on("runtime-ready", () => {
  console.log("runtime-ready");
});

stageRender.on("runtime-load", () => {
  console.log("runtime-load");
});
onMounted(() => {
  stageRender.mount(frameWrapRef.value!);
});
</script>

<style lang="scss" scoped>
.frame_wrap {
  z-index: 200;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
