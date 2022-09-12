<template>
  <div class="toolbar__wrapper">
    <div class="toolbar__info">
      <githubSvg @click="linkToGithub" class="svg__wrapper" />
    </div>
    <div class="toolbar__operate">
      <el-button>撤消</el-button>
      <el-button @click="config?.preview">预览</el-button>
      <el-button @click="config?.importSchema">导入JSON</el-button>
      <el-button @click="config?.exportSchema">导出JSON</el-button>
      <el-button @click="config?.reset">清空画布</el-button>
    </div>

  </div>
</template>

<script lang='ts' setup>
import { ElButton } from 'element-plus';
import githubSvg from '~/assets/githubSvg.vue'

defineProps<{
  config?: {
    preview: () => void,
    reset: () => void,
    importSchema: () => void,
    exportSchema: () => void,
  }
}>()

const linkToGithub = () => {
  window.open('https://github.com/haihaixhj')
}

</script>

<style lang="scss" scoped>
.toolbar__wrapper {
  padding: 15px 10px;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;

  .svg__wrapper {
    cursor: pointer;
  }
}
</style>
