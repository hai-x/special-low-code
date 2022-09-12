<template>
    <el-dialog :model-value="true" title="预览" :fullscreen="true" :align-center="true" @close="emits('close')">
        <div v-if="schema.length">
            <template v-for="(item,index) in schema" :key="index">
                <component :is="item.componentName" v-bind="{...item.props,...item.event} ">
                    {{ item.type }}
                </component>
            </template>
        </div>
        <div v-else>
            <el-empty description="暂无内容哦~" />
        </div>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';
import { useSchema } from '~/store/schema';

const emits = defineEmits(['close'])

const schemaStore = useSchema()

const schema = computed(() => schemaStore.schema.map((i: any) => {
    const { eventType, code } = i?.event
    const key = 'on' + eventType[0].toUpperCase() + eventType.slice(1)
    i.event[key] = new Function(code)
    return i
}
))


</script>

<style lang="scss" scoped>

</style>