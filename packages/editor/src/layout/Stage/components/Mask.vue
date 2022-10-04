<template>
  <div
    @drop="dropHandler"
    @dragover="dragoverHandler"
    @dragenter="dragenterHandler"
    @click="(e:any) => schemaStore.setCurrentComponent(e.target.id)"
    class="mask__wrap"
  >
    <div
      v-for="(dom, index) in maskDomConfig"
      :key="index"
      :id="dom?.id"
      :style="dom"
    ></div>
    <div
      v-show="activeFrame.id"
      :style="activeFrame.style"
      class="frame__wrap-active"
    >
      <!-- 操作区域 -->
      <div class="action__wrap">
        <!-- 拖动手柄 -->
        <div
          class="drag-handler"
          :draggable="activeFrame.canMove"
          @dragend="dragendHandler"
        >
          <span> {{ activeFrame.id }} </span>
        </div>
        <div class="delete-handler">
          <el-icon @click.stop="() => schemaStore.deleteCurrentComponent()">
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
const schemaStore: any = inject("schemaStore");

const showActiveFrame = ref<Boolean>(false);

const activeFrame = ref({
  id: computed(() => schemaStore.currentComponent?.id),
  style: computed(() => schemaStore.currentComponent?.cssStyle),
  canMove: true,
});

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
    const { width, height, top, left, right, bottom } = i.cssStyle;

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
  const finalList: any = [];
  findAllMaskDom(schemaStore.schema, finalList);
  return finalList;
});

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
