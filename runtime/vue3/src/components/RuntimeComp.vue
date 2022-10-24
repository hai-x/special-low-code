<template>
  
  <component
    :is="config.componentName"
    v-bind="config.props"
    :style="config.cssStyle"
  >
    <template v-if="config.children.length">
      <RuntimeComp
        v-for="(child, index) in config.children"
        :key="index"
        :config="child"
      />
    </template>
    <template v-else>{{ config.name }}</template>
  </component>
</template>

<script lang="tsx">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "RuntimeComp",
  props: ["config"],
  setup(props) {
  
  },
});
</script>

<style lang="scss" scoped></style>
