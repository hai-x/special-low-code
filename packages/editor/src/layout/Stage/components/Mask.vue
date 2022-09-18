<template>
  <div
    @drop="dropHandler"
    @dragover="dragoverHandler"
    @dragenter="dragenterHandler"
    @click="activeOrInActive"
    class="mask__wrap"
  >
    <div
      v-for="(dom, index) in maskDomConfig"
      :key="index"
      :id="dom?.id"
      :style="dom"
    ></div>
    <div
      v-if="activeFrame.id"
      :style="activeFrame.style"
      :class="{ 'frame__wrap-active': activeFrame?.id }"
    >
      <!-- 操作区域 -->
      <div class="action__wrap">
        <!-- 拖动手柄 -->
        <div class="drag-handler" :draggable="true" @dragend="dragendHandler">
          <span> {{ activeFrame.id }} </span>
        </div>
        <div class="delete-handler">
          <el-icon @click.stop="removeComponent">
            <Delete />
          </el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Schema } from "@special/schema";
import { ref, inject, computed } from "vue";
import { Delete } from "@element-plus/icons-vue";
import useDrop from "@/composables/useDrop";
import useDrag from "@/composables/useDrag";

const schemaStore: any = inject("schemaStore");

const activeFrame = computed<any>(() => {
  let style = schemaStore.currentComponent?.props.style;
  return {
    id: schemaStore.currentComponent?.id,
    style: {
      width: style?.width,
      height: style?.height,
      top: style?.top,
      bottom: style?.bottom,
      left: style?.left,
      right: style?.right,
    },
  };
});

const { dragoverHandler, dragenterHandler, dropHandler } = useDrop(schemaStore);

const { dragendHandler } = useDrag(schemaStore, activeFrame);

const maskDomConfig = computed(() => {
  return schemaStore.schema?.map((i: Schema) => {
    const { width, height, top, left, right, bottom } = i.props.style;
    return {
      id: i.id,
      width,
      height,
      top,
      left,
      right,
      bottom,
      position: "absolute",
    };
  });
});

const activeOrInActive = (e: any) => {
  if (e.target.id) {
    let { id } = e.target;
    schemaStore.setCurrentComponent(id);
  } else {
    schemaStore.clearCurrentComponent();
  }
};

const removeComponent = () => {
  schemaStore.deleteComponentById();
  activeFrame.value.id = "";
  activeFrame.value.style = null;
};
</script>

<style lang="scss" scoped>
.mask__wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  z-index: 300;
}
.frame__wrap-active {
  outline: 1px solid skyblue;
  position: absolute;
  .action__wrap {
    display: flex;
    position: absolute;
    align-items: center;
    padding: 2px 3px;
    color: white;
    font-size: 12px;
    top: -22px;
    background-color: skyblue;
    transform: translate3d(0, 0, 0);
    .drag-handler {
      cursor: move;
      margin-right: 5px;
    }
    .delete-handler {
      cursor: pointer;
    }
  }
}
</style>
