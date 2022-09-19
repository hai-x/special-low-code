<template>
    <div style="width:100%">
        <div class="tree__title">大纲树</div>
        <el-tree :data="treeData" @node-click="handleTreeClick"/>
    </div>
</template>

<script lang='ts' setup>
import { computed, inject } from 'vue';
import { Schema } from '@special/schema';

const schemaStore:any = inject('schemaStore')

interface ITreeData {
    label:string,
    id:string,
    children:ITreeData[]
}

const getTreeData = (schema:Schema[])=>{
    return schema.map((item:Schema):ITreeData=>{
        return {
            label:item.id || item.type,
            id:item.id || item.type,
            children:getTreeData(item?.children || []),
        }
    })
}

const treeData = computed(()=>{
    return getTreeData(schemaStore.schema)
})

const handleTreeClick = (data:ITreeData)=>{
    schemaStore.setCurrentComponent(data?.id)
}
</script>

<style lang="scss" scoped>
    .tree__title{
        text-align: center;
        font-size: var(--el-font-size-base);
        font-weight: 500;
        color: var(--el-text-color-primary);
        padding: 10px;
    }
</style>