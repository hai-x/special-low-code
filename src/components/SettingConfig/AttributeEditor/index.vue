<template>
  <div class="editor__wrapper">
    <div>
      <el-tag effect="light" size="large">组件属性</el-tag>
      <FormItem v-for="(item,index) in attrFormConfig" :key="index" :model-value="attrModel[item.key]"
        @update:model-value="updateAttrFormValue" :form-tag="item.type" :options="item.options" :title="item.title"
        :formKey="item.key"></FormItem>
    </div>
    <el-divider />
    <div>
      <el-tag effect="light" size="large">css属性</el-tag>
      <FormItem v-for="(item,index) in cssFormConfig" :key="index" :model-value="cssModel?.[item.key]"
        @update:model-value="updateCssValue" :form-tag="item.type" :options="item?.options" :title="item.title"
        :formKey="item.key"></FormItem>
    </div>
    <div>
      <el-button type="danger" @click="resetProps">重置</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import FormItem from './FormItem.vue';
import { useSchema } from '~/store/schema'
import { computed, ref } from 'vue'
import { attributeMap, AttributeMapType, cssMap } from '~/constants/attribute/attributeMap'


const schemaStore = useSchema()

const currentComponent = computed(() => schemaStore.currentComponent)

const attrFormConfig = computed<AttributeMapType>(() => attributeMap[currentComponent.value?.type])

const cssFormConfig = ref(cssMap)

const attrModel = computed(() => currentComponent.value?.props)

const cssModel = computed(() => currentComponent.value?.props?.style)

const updateAttrFormValue = (key: string, value: any) => {
  schemaStore.updateComponentProps('attr', key, value)

}

const updateCssValue = (key: string, value: any) => {
  schemaStore.updateComponentProps('css', key, value)
}

const resetProps = () => {
  schemaStore.resetComponentProps()
}
</script>

<style lang="scss" scoped>

</style>