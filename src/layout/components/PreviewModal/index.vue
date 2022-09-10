<template>
    <el-dialog v-model="dialogVisible" title="预览" :fullscreen="true" :align-center="true">
        <template v-for="(item,index) in schema" :key="index">
            <component :is="item.componentName" v-bind="{...item.props,...item.event}">
                {{ item.type }}
            </component>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';
import { useSchema } from '~/store/schema';

const dialogVisible = ref(false)
const schemaStore = useSchema()

const schema = computed(() => schemaStore.schema)

const handleDialogShow = () => {
    dialogVisible.value = true
}

defineExpose({ handleDialogShow })

</script>

<style lang="scss" scoped>

</style>