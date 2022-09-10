<template>
    <draggable v-model="schemaStore.schema" :group="renderGroup" :animation="300" :sort="true" item-key="id"
        element="ul" class="render__wrapper" ghost-class="ghost" handle=".drag-handler">
        <template #item="{ element }">
            <RenderItem :config="{
                componentName:element.componentName,
                props:element.props,
                id:element.id,
                event:element.event,
                type:element.type
            }"></RenderItem>
        </template>
    </draggable>
</template>

<script lang='ts' setup>
import { useSchema } from '~/store/schema'
import { renderGroup } from '~/constants/draggable/group'
import draggable from 'vuedraggable'
import RenderItem from './RenderItem.vue';

const schemaStore = useSchema()


</script>

<style lang="scss" scoped>
.render__wrapper {
    min-height: 100px;
}
</style>