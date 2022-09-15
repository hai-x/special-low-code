<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="基础组件" name="basic">
      <draggable
        v-model="basicAssetList"
        item-key="id"
        :group="assetListGroup"
        :clone="useGenerator"
        class="assetList__wrapper"
      >
        <template #item="{ element }">
          <el-card
            shadow="hover"
            :body-style="CARD_STYLE"
            class="asset__wrapper"
          >
            {{ element.title }}
          </el-card>
        </template>
      </draggable>
    </el-collapse-item>
  </el-collapse>
  <div></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Draggable from "vuedraggable";
import { assetListGroup } from "@/constants/draggable/group";
import {useGenerator} from '@special/shared'
import {elementConfig} from "@special/schema";

// const handleChange = () => {
//     console.log('changed');
// }

// const getComponentData = () => {
//     return {
//         onChange: handleChange,
//         wrap: true,
//     };
// }

const activeNames = ref<string>("basic");

const CARD_STYLE = {
  width: "70px",
  "line-height": "40px",
  "text-align": "center",
  height: "40px",
  padding: "10px",
};

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
</script>

<style lang="scss" scoped>
.assetList__wrapper {
  display: flex;
}

.asset__wrapper {
  margin: 10px;
  color: gray;
  font-weight: 600;
}
</style>
