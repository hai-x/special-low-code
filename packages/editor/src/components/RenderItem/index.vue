<template>
  <component
    :is="computedComponent.componentName"
    v-bind="{ ...computedComponent.props, ...computedComponent.event }"
  >
    <template v-if="!computedComponent.children.length">
      {{ computedComponent.type }}
    </template>
    <template v-else>
      <template v-for="child in computedComponent.children">
        <RenderItem :component="child"></RenderItem>
      </template>
    </template>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  name: "RenderItem",
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    
    let computedComponent = computed(() => {
      const component = cloneDeep(props.component);
      if (component.event?.eventType && component.event?.code) {
        const { eventType, code } = component.event;
        const key = "on" + eventType[0].toUpperCase() + eventType.slice(1);
        component.event[key] = new Function(code);
      }
      return component;
    });
    return { computedComponent };
  },
});
</script>

<style lang="stylus" scoped></style>
