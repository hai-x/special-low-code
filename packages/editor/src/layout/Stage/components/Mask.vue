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
        <div class="drag-handler" :draggable="activeFrame.canMove" @dragend="dragendHandler">
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
import { inject, computed, watch, ref } from "vue";
import { Delete } from "@element-plus/icons-vue";
import useDrop from "@/composables/useDrop";
import useDrag from "@/composables/useDrag";
import { $, transformToCss } from "@special/shared";
const schemaStore: any = inject("schemaStore");

const activeFrame = ref({
  id: "",
  style: {},
  canMove: true,
});

watch(
  () => schemaStore.currentComponent,
  (v) => {
    let id = v?.id;
    let maskDom: any = $(`#${id}`);
    if (maskDom) {
      activeFrame.value.id = id;
      activeFrame.value.style = transformToCss(maskDom.style.cssText);
    } else {
      activeFrame.value.id = "";
      activeFrame.value.style = {};
    }
  },
  {
    deep: true,
  }
);

const { dragoverHandler, dragenterHandler, dropHandler } = useDrop(schemaStore);

const { dragendHandler } = useDrag(schemaStore, activeFrame);

const findAllMaskDom = (
  schemalist: Schema[],
  finalList: any,
  positition?: { left: string; top: string },
  columnLen?: number,
  columnIndex?: number
) => {
  schemalist.forEach((i: Schema, index: number) => {
    if (i.type === "col") {
      findAllMaskDom(i.children!, finalList, positition, columnLen, index);
      return;
    }
    const { width, height, top, left, right, bottom } = i.props.style;

    const finalStyle = {
      width,
      height,
      top: positition?.top ? positition.top : top,
      left: positition?.left
        ? `${
            parseInt(positition.left) +
            Math.floor(375 / columnLen!) * columnIndex!
          }px`
        : left,
      right,
      bottom,
      position: "absolute",
    };
    // 如果当前dom为选中节点，更新选中框样式
    if (i.id === activeFrame.value.id) {
      activeFrame.value.style = finalStyle;
      activeFrame.value.canMove = !positition?.left
    }

    const finalInfo = {
      id: i.id,
      ...finalStyle,
    };
    finalList.push(finalInfo);

    if (i.children?.length! > 0) {
      // 如果是布局组件 需要告知子组件列数和位置 动态计算位置
      if (i.type === "row") {
        const position = { left, top };
        findAllMaskDom(i.children!, finalList, position, i.children?.length);
      } else {
        findAllMaskDom(i.children!, finalList);
      }
    }
  });
};

const maskDomConfig = computed(() => {
  let finalList: any = [];
  let schema = schemaStore.schema;
  findAllMaskDom(schema, finalList);
  return finalList;
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
  activeFrame.value.style = {};
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
