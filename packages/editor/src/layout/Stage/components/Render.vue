<!-- <template>
  <div class="render__wrap">
    <div v-for="(config, index1) in schemaStore.schema" :key="index1">
      <component :is="config.componentName" v-bind="config.props">
        <template v-if="config.children.componentName.length">
          {{ config.type }}
        </template>
        <template v-else>
          <div v-for="((subConfig,index2) in config.children)" :key="index2">
            <component :is="subConfig.componentName"></component>
          </div>
        </template>
      </component>
    </div>
  </div>
</template> -->

<script lang="tsx">
import { Schema } from "@special/schema";
import { computed, defineComponent, inject, resolveComponent } from "vue";
export default defineComponent({
  setup() {
    const schemaStore: any = inject("schemaStore");

    const resolve = (config: Schema) => {
      const Tag = resolveComponent(config?.componentName);

      return (
        //@ts-ignore
        <Tag {...config?.props}>
          {config?.children?.length! > 0
            ? config?.children?.map((child: Schema) => resolve(child))
            : config?.type}
        </Tag>
      );
    };
    const dynamicComponent = computed(() => {
      return schemaStore.schema.map((config: Schema) => resolve(config));
    });

    return () => <div className="render__wrap">{dynamicComponent.value}</div>;
  },
});
</script>

<style lang="scss" scoped>
.render__wrap {
  z-index: 200;
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
