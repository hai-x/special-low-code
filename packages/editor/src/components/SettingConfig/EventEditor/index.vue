<template>
  <div class="eventEditor__wrapper" v-if="currentComponent">
    <div>
      <FormItem
        v-for="(item, index) in finalEventConfig"
        :key="index"
        :model-value="eventModel[item?.key]"
        @update:model-value="updateEventValue"
        :form-tag="item.type"
        :options="item?.options"
        :title="item.title"
        :formKey="item?.key"
        :propAndEvent="item?.props"
      >
        {{ item?.slot }}
      </FormItem>
    </div>
    <div class="toolbar__wrapper">
      <el-button type="danger" @click="resetEvent">重置</el-button>
    </div>
    <CodeEditorModal ref="CodeEditorModalRef" @confirm="confirmCodeEdit" />
  </div>
</template>

<script lang="ts" setup>
import FormItem from "../components/FormItem.vue";
import { FORM_ITEM_TYPE,eventConfig } from "@special/schema";
import { useSchema } from "@/store/schema";
import { computed, ref } from "vue";
import CodeEditorModal from "../components/CodeEditorModal.vue";

const CodeEditorModalRef = ref(null);

const schemaStore = useSchema();

const currentComponent = computed(() => schemaStore.currentComponent);

const eventModel = computed(() => currentComponent.value?.event);

const finalEventConfig:any = [
  ...eventConfig,
  {
    type: FORM_ITEM_TYPE.BUTTON,
    title: "代码",
    slot: "添加事件代码",
    props: {
      onClick: () => {
        (CodeEditorModalRef.value as any).handleDialogShow();
      },
    },
  },
];

const confirmCodeEdit = (v: string) => {
  schemaStore.updateComponentProps("event", "code", v);
};

const updateEventValue = (key: "eventType", value: any) => {
  schemaStore.updateComponentProps("event", key, value);
};
const resetEvent = () => {
  schemaStore.resetComponentEvents();
};
</script>

<style lang="scss" scoped></style>
