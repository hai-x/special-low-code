<template>
  <div class="render__wrapper">
    <template v-for="config in schemaStore.schema">
      <component :is="config.componentName" v-bind="config.props">
        {{ config.type }}
      </component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const schemaStore: any = inject("schemaStore");
</script>

<style lang="scss" scoped>
.render__wrapper {
  z-index: 200;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
