<template>
    <div class="layout__wrapper">
        <ToolBar />
        <main>
            <!-- 左侧组件列表 -->
            <section class="main__left">
                <AssetList />
            </section>
            <!-- 中间画布 -->
            <section class="main__center">
                <Render />
            </section>
            <!-- 右侧属性列表 -->
            <section class="main__right">
                <el-tabs>
                    <el-tab-pane label="属性" name="attr">
                        <!-- <AttributeEditor></AttributeEditor> -->
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation">

                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events">

                    </el-tab-pane>
                </el-tabs>
            </section>
        </main>
    </div>
</template>
 
<script lang='ts' setup>
import {
    ElTabs,
    ElTabPane,
} from "element-plus";
import ToolBar from "./components/ToolBar.vue";
import AssetList from "~/components/AssetList/index.vue";
import Render from "~/components/Render/index.vue";

</script>
 
<style lang="scss">
.layout__wrapper {
    height: 100vh;
    width: 100vw;
    background: #fff;
    main {
        height: calc(100% - 64px);
        display: flex;
        overflow: hidden;
        .main__left {
            width: 200px;
            padding:15px;
        }
        .main__center {
            background: #f5f5f5;
            flex: 1;
            padding:15px;
        }
        .main__right {
            width: 200px;
            padding:15px;
            padding-top:0px;
            .el-select {
                width: 100%;
            }
        }
    }
}
</style>