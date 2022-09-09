<template>
  <div class="toolbar__wrapper">
    <div class="toolbar__info">
      
    </div>
    <div class="toolbar__operate">
      <el-button>撤消</el-button>
      <el-button>预览</el-button>
      <el-button>保存</el-button>
      <el-button>清空画布</el-button>
    </div>

  </div>
</template>

<script lang='ts' setup>
import { ElButton } from 'element-plus';
</script>

<style lang="scss" scoped>
.toolbar__wrapper {
  padding: 15px 10px;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;

  .toolbar__operate {}
}
</style>
