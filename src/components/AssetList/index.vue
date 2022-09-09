<template>
    <div class="assetList__wrapper">
        <draggable v-model="assetList" item-key="id" :group="assetListGroup" :clone="generator">
            <template #item="{element}">
                <el-card shadow="hover" :body-style="CARD_STYLE">
                    {{element.title}}
                </el-card>
            </template>
        </draggable>

    </div>
</template>

<script lang='ts' setup>
import Draggable from 'vuedraggable'
import { assetListGroup } from '~/constants/draggable/group'
import generator from '~/utils/generator'
import assetMap from '~/constants/asset/assetMap'

// const handleChange = () => {
//     console.log('changed');
// }

// const getComponentData = () => {
//     return {
//         onChange: handleChange,
//         wrap: true,
//     };
// }

const CARD_STYLE = {
    width: '70px',
    'line-height': '40px',
    'text-align': 'center',
    height: '40px',
    padding: '10px'
}

const assetList = [
    {
        title: '按钮', value: assetMap.button
    },
    {
        title: '输入框', value: assetMap.input
    },
]
</script>

<style lang="scss" scoped>
.assetList__wrapper {
    display: flex;
    justify-content: space-between;

}
</style>