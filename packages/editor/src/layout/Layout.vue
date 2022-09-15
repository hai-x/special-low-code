<template>
  <div class="layout__wrapper">
    <ToolBar :config="toolConfig" />
    <main>
      <!-- 左侧组件列表 -->
      <section class="main__left">
        <AssetList />
      </section>
      <!-- 中间画布 -->
      <section class="main__center" @click="inActiveCurrentComponent">
        <Render />
      </section>
      <!-- 右侧属性列表 -->
      <section class="main__right">
        <SettingConfig />
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
import AssetList from "@/components/AssetList/index.vue";
import Render from "@/components/Render/index.vue";
import SettingConfig from "../components/SettingConfig/index.vue";
import PreviewModal from "./components/PreviewModal/index.vue";
import ImportSchemaModal from "./components/ImportSchemaModal/index.vue";
import ExportSchemaModal from "./components/ExportSchemaModal/index.vue";
import CompilerModal from "./components/CompilerModal/index.vue";
import { useSchema } from "@/store/schema";
import { ref } from "vue";

const schemaStore = useSchema();

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
    schemaStore.currentComponent = null;
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

const inActiveCurrentComponent = () => {
  schemaStore.clearCurrentComponent();
};
</script>

<style lang="scss">
.layout__wrapper {
  height: 100vh;
  width: 100vw;
  background: #fff;

  main {
    height: calc(100% - 64px);
    display: flex;
    overflow: hidden;

    .main__left {
      flex: 2;
      padding: 15px;
    }

    .main__center {
      background: #f5f5f5;
      flex: 4;
      padding: 15px;
    }

    .main__right {
      flex: 2;
      padding: 15px;
      padding-top: 0px;
      overflow: scroll;

      .el-select {
        width: 100%;
      }
    }
  }
}
</style>
