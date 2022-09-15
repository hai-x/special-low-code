<template>
  <div
    @click.stop="handleComponentActvie"
    :class="{ 'item__wrapper-active': isComponentActive }"
  >
    <!-- 拖动手柄 -->
    <div v-show="isComponentActive" class="drag-handler">
      <span>
        {{ config.type }}
      </span>
    </div>
    <!-- 操作区域 -->
    <div v-show="isComponentActive" class="item-action">
      <el-icon @click.stop="removeComponent">
        ×
      </el-icon>
    </div>
    <component :is="config.componentName" v-bind="{ ...config.props }">
      {{ config.type }}
    </component>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Schema } from "@special/schema";
import { useSchema } from "@/store/schema";

const schemaStore = useSchema();

const props = defineProps<{
  config: Schema;
}>();

const isComponentActive = computed<boolean>(() =>
  Boolean(schemaStore.currentComponent?.id === props?.config.id)
);

const handleComponentActvie = () => {
  schemaStore.setCurrentComponent(props.config.id);
};

const removeComponent = () => {
  schemaStore.deleteComponentById();
};
</script>

<style lang="scss" scoped>
.item__wrapper-active {
  outline: 1px solid skyblue;
  position: relative;

  .drag-handler {
    display: flex;
    gap: 3px;
    align-items: center;
    position: absolute;
    inset: 0 auto auto 0;
    z-index: 1;
    padding: 2px 3px;
    color: white;
    font-size: 12px;
    background-color: skyblue;
    cursor: move;
    top: -17px;
  }

  .item-action {
    position: absolute;
    inset: auto 0 0 auto;
    z-index: 1;
    cursor: pointer;
    color: white;
    background-color: skyblue;
    font-size: 16px;
    padding: 2px 3px;
    width: 15px;
    height: 16px;
    display: flex;
  }
}
</style>
