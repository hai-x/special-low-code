<template>
  <el-collapse :model-value="activeNames">
    <el-collapse-item
      v-for="(list, key) in elementList"
      :title="key"
      :name="key"
    >
      <div class="collapse__wrap">
        <el-card
          v-for="(element, key) in list"
          :key="key"
          shadow="hover"
          class="asset__wrap"
          :draggable="true"
          @dragstart.native="dragstartHandler($event, element)"
        >
          {{ element.name }}
        </el-card>
      </div>
    </el-collapse-item>
  </el-collapse>
  <div></div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useGenerator } from "@special/shared";
import { elementList } from "@special/schema";

const activeNames = ref<string[]>(["basic", "layout"]);

const dragstartHandler = (e: DragEvent, ELEMENT_INFO: any) => {
  e.dataTransfer?.setData(
    "ELEMENT_INFO",
    JSON.stringify(useGenerator(ELEMENT_INFO))
  );
};
</script>

<style lang="scss" scoped>
.asset__wrap {
  margin: 10px;
  color: gray;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
