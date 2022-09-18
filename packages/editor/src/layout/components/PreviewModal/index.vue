<template>
  <el-dialog
    :model-value="true"
    title="预览"
    :align-center="true"
    class="modal"
    @close="emits('close')"
    :width="isPhoneMode ? 375 : '60%'"
  >
    <div
      :class="{
        'preview__wrap-pc': !isPhoneMode,
        'preview__wrap-phone': isPhoneMode,
      }"
    >
      <template v-if="schema.length">
        <div style="position: relative">
          <template v-for="item in schema" :key="index">
            <component
              :is="item.componentName"
              v-bind="{ ...item.props, ...item.event }"
            >
              {{ item.type }}
              <component
                v-for="child in item?.children"
                :is="child.componentName"
                v-bind="{ ...child.props, ...child.event }"
              >
                {{ item.type }}
              </component>
            </component>
          </template>
        </div>
      </template>
      <template v-else>
        <el-empty description="暂无内容哦！" />
      </template>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, inject, Ref } from "vue";

const emits = defineEmits(["close"]);

const schemaStore: any = inject("schemaStore");
const mode: Ref<"phone" | "pc"> | undefined = inject("mode");
const isPhoneMode = computed(() => mode?.value === "phone");

const schema = computed(() =>
  schemaStore.schema.map((i: any) => {
    if (i.event?.eventType && i.event?.code) {
      const { eventType, code } = i;
      const key = "on" + eventType[0].toUpperCase() + eventType.slice(1);
      i.event[key] = new Function(code);
    }
    return i;
  })
);
</script>

<style lang="scss" scoped>
.preview__wrap-pc {
  height: 60vh;
}
.preview__wrap-phone {
  height: 775px;
  width: 375px;
  padding: 55px 15px 25px;
  overflow: scroll;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(@/assets/phone.webp);
}
:global(.modal .el-dialog__body) {
  padding: 0px;
}
</style>
