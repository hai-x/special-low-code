<template>
  <div class="attrEditor__wrap" v-if="currentComponent">
    <el-collapse v-model="activeTabName">
      <el-collapse-item title="组件属性" name="attr">
        <FormItem
          v-for="(item, index) in attrFormConfig"
          :key="index"
          :model-value="attrModel[item.key]"
          @update:model-value="updateAttrFormValue"
          :form-tag="item.type"
          :options="item.options"
          :title="item.title"
          :formKey="item.key"
          :valueType="item.valueType"
        />
      </el-collapse-item>
      <el-collapse-item title="css属性" name="css">
        <FormItem
          v-for="(item, index) in cssFormConfig"
          :key="index"
          :model-value="cssModel?.[item.key]"
          @update:model-value="updateCssValue"
          :form-tag="item.type"
          :options="item?.options"
          :title="item.title"
          :formKey="item.key"
        />
      </el-collapse-item>
    </el-collapse>

    <div class="toolbar__wrap">
      <el-button type="danger" @click="resetProps">重置</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormItem from "../components/FormItem.vue";
import { computed, ref,inject } from "vue";
import {
  propsConfig,
  cssConfig,
} from "@special/schema";

import type {
  IPropsConfig
} from "@special/schema";

const activeTabName = ref(["attr", "css"]);

const schemaStore:any = inject('schemaStore');

const currentComponent = computed(() => schemaStore.currentComponent);

const attrFormConfig = computed<IPropsConfig[]>(
  () => propsConfig[currentComponent.value?.type]
);

const cssFormConfig = ref(cssConfig);

const attrModel = computed(() => currentComponent.value?.props);

const cssModel = computed(() => currentComponent.value?.props?.style);

const updateAttrFormValue = (key: string, value: any) => {
  schemaStore.updateComponentProps("attr", key, value);
};

const updateCssValue = (key: string, value: any) => {
  schemaStore.updateComponentProps("css", key, value);
};

const resetProps = () => {
  schemaStore.resetComponentProps();
};
</script>

<style lang="scss" scoped>
.toolbar__wrap {
  margin-top: 20px;
}
</style>
