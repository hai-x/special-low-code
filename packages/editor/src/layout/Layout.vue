<template>
  <div class="layout__wrap">
    <ToolBar :config="toolConfig" />
    <main class="main__wrap">
      <!-- 左侧组件列表 -->
      <section class="main__left">
        <WorkBench />
      </section>
      <!-- 中间画布 -->
      <section class="main__center">
        <Stage />
      </section>
      <!-- 右侧属性列表 -->
      <section class="main__right">
        <Config />
      </section>
    </main>
  </div>
  <PreviewModal v-if="PreviewModalShow" @close="PreviewModalShow = false" />
  <ImportSchemaModal
    v-if="ImportSchemaModalShow"
    @close="ImportSchemaModalShow = false"
  />
  <ExportSchemaModal
    v-if="ExportSchemaModalShow"
    @close="ExportSchemaModalShow = false"
  />
  <CompilerModal v-if="CompilerModalShow" @close="CompilerModalShow = false" />
</template>

<script lang="ts" setup>
import ToolBar from "./components/ToolBar/index.vue";
import Stage from "./Stage/index.vue";
import Config from "./Config/index.vue";
import PreviewModal from "./components/PreviewModal/index.vue";
import ImportSchemaModal from "./components/ImportSchemaModal/index.vue";
import ExportSchemaModal from "./components/ExportSchemaModal/index.vue";
import CompilerModal from "./components/CompilerModal/index.vue";
import { ref, provide } from "vue";
import WorkBench from "./WorkBench/index.vue";
import { useSchema } from "@/store/schema";
import { createSandBox } from "@special/shared";

const schemaStore = useSchema();
provide("schemaStore", schemaStore);
let sandBox = createSandBox();
provide("sandBox", sandBox);
// console.log(sandBox);

const mode = ref<"phone" | "pc">("phone");
provide("mode", mode);
provide("handleSwitchMode", (v: "phone" | "pc") => {
  mode.value = v;
});

const PreviewModalShow = ref(false);
const ExportSchemaModalShow = ref(false);
const ImportSchemaModalShow = ref(false);
const CompilerModalShow = ref(false);

const toolConfig = ref({
  preview: () => {
    PreviewModalShow.value = true;
  },
  reset: () => {
    schemaStore.resetSchema();
    schemaStore.currentComponent = null!;
  },
  importSchema: () => {
    ImportSchemaModalShow.value = true;
  },
  exportSchema: () => {
    ExportSchemaModalShow.value = true;
  },
  compiler: () => {
    CompilerModalShow.value = true;
  },
});
</script>

<style lang="scss">
.layout__wrap {
  height: 100vh;
  width: 100vw;
  background: #fff;

  .main__wrap {
    height: calc(100% - 64px);
    display: flex;
    overflow: hidden;

    .main__left {
      flex-basis: 64px;
    }

    .main__center {
      flex: 4;
      position: relative;
      min-width: 390px;
      border-right: solid 1px var(--el-menu-border-color);
      border-left: solid 1px var(--el-menu-border-color);
    }

    .main__right {
      flex-basis: 300px;
      padding: 15px;
      padding-top: 0px;
      overflow-y: scroll;

      .el-select {
        width: 100%;
      }
    }
  }
}
</style>
