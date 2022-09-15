<template>
    <div class="workbench__wrapper">
        <div class="menu__wrapper">
            <el-menu class="el-menu-vertical-demo" :collapse="true">
            <el-menu-item @click="handleClick('asset')">
                <el-icon>
                    <Star />
                </el-icon>
                <template #title>物料区</template>
            </el-menu-item>
            <el-menu-item @click="handleClick('outlines')">
                <el-icon>
                    <Document />
                </el-icon>
                <template #title>大纲树</template>
            </el-menu-item>
        </el-menu>
        </div>
        <div class="list__wrapper" v-if="currentShow === 'asset'">
            <AssetList />
        </div>
        <div class="tree__wrapper" v-if="currentShow === 'outlines'">
            <OutlinesTree />
        </div>
        
    </div>
</template>

<script lang='ts' setup>
import AssetList from './components/AssetList/index.vue'
import {Document,Star} from '@element-plus/icons-vue'
import { ref } from 'vue';
import OutlinesTree from './components/OutlinesTree/index.vue';

const currentShow = ref<string>('')

const handleClick = (tabName:string)=>{
    if(currentShow.value === tabName){
        currentShow.value = ''
    }else{
        currentShow.value = tabName;
    }

}
</script>

<style lang="scss" scoped>
.workbench__wrapper{
    width:100%;
    height:100%;
    display:flex;
    .menu__wrapper{
        width:64px;
        height: 100%;
    }

    .list__wrapper{
        padding:10px;
        width:300px;
    }
    .tree__wrapper{
        padding:10px;
        width:100px;
    }
}
:deep(.el-menu--collapse){
    height:100%
}
</style>