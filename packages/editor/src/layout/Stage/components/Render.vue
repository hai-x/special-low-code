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
        <Tag style={{...config.cssStyle}} {...config.props}>
          {config?.children?.length! > 0
            ? config?.children?.map((child: Schema) => resolve(child))
            : config?.name}
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
