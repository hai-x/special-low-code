<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="基础组件" name="basic">
      <div class="collapse__wrapper">
        <el-card
          v-for="(element, index) in basicAssetList"
          :key="index"
          shadow="hover"
          class="asset__wrapper"
          :draggable="true"
          @dragstart.native="dragstartHandler($event, element)"
        >
          {{ element.title }}
        </el-card>
      </div>
    </el-collapse-item>
  </el-collapse>
  <div></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useGenerator } from "@special/shared";
import { elementConfig } from "@special/schema";

const activeNames = ref<string>("basic");

let basicAssetList = [
  {
    title: "按钮",
    value: elementConfig.button,
  },
  {
    title: "输入框",
    value: elementConfig.input,
  },
  {
    title: "评分",
    value: elementConfig.rate,
  },
];

const dragstartHandler = (e: DragEvent, ELEMENT_INFO: any) => {
  e.dataTransfer?.setData(
    "ELEMENT_INFO",
    JSON.stringify(useGenerator(ELEMENT_INFO))
  );
};
</script>

<style lang="scss" scoped>
.asset__wrapper {
  margin: 10px;
  color: gray;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
