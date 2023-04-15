// TODO: runtime
<!-- <template>
  <div class="frame_wrap" ref="frameWrapRef"></div>
</template>

<script lang="ts" setup>
import StageRender from "@/composables/StageRender";
import { onMounted, ref } from "vue";
const frameWrapRef = ref(null);
let stageRender = new StageRender();

stageRender.on("runtime-ready", () => {
  console.log("runtime-ready");
});

stageRender.on("runtime-load", () => {
  console.log("runtime-load");
});
onMounted(() => {
  stageRender.mount(frameWrapRef.value!);
});
</script>

<style lang="scss" scoped>
.frame_wrap {
  z-index: 200;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style> -->

<script lang="tsx">
import { Schema } from "@special/schema";
import { computed, defineComponent, inject, resolveComponent } from "vue";
export default defineComponent({
  setup() {
    const schemaStore: any = inject("schemaStore"); 
    const resolve = (config: Schema) => {
      const Tag = resolveComponent(config?.componentName);return (
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
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
}
</style>

