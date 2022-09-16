<template>
  <div class="toolbar__wrapper">
    <div class="toolbar__info">
      <!-- <img src="/logo.webp" alt="Logo" class="logo__wrapper"> -->
      <githubSvg @click="linkToGithub" class="svg__wrapper" />
    </div>
    <div class="toolbar__operate">
      <el-button @click="config?.preview">预览</el-button>
      <el-button @click="config?.reset">清空</el-button>
      <el-button @click="config?.importSchema">导入JSON</el-button>
      <el-button @click="config?.exportSchema">导出JSON</el-button>
      <el-button @click="config?.compiler">出码</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import githubSvg from "@/assets/githubSvg.vue";

defineProps<{
  config?: {
    preview: () => void;
    reset: () => void;
    importSchema: () => void;
    exportSchema: () => void;
    compiler: () => void;
  };
}>();

const linkToGithub = () => {
  window.open("https://github.com/haihaixhj");
};
</script>

<style lang="scss" scoped>
  
.toolbar__wrapper {
  padding: 15px 10px;
  height: 64px;
  box-sizing: border-box;
  overflow:hidden;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toolbar__info{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .svg__wrapper {
      cursor: pointer;
      width:20px;
      margin-left: 15px;
      height:20px;
    }
    .logo__wrapper{
      flex:1;
      width:50px;
      height:50px;
    }
  }
  
}
</style>
