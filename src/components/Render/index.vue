<template>
    <draggable v-model="schemaStore.schema" :group="renderGroup" :animation="300" :sort="true" item-key="id"
        element="ul" class="wh-full bg-white" ghost-class="ghost" handle=".drag-handler">
        <template #item="{ element }">
            <component :is="element.componentName"></component>
        </template>
    </draggable>
</template>

<script lang='ts' setup>
import { useSchema } from '~/store/schema'
import { renderGroup } from '~/constants/draggable/group'
import draggable from 'vuedraggable'
import RenderItem from './RenderItem.vue';

const schemaStore = useSchema()

console.log(schemaStore);

</script>

<style lang="scss" scoped>

</style>