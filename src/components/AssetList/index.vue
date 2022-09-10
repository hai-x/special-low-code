<template>
    <div>
        <draggable v-model="assetList" item-key="id" :group="assetListGroup" :clone="useGenerator"
            class="assetList__wrapper">
            <template #item="{element}">
                <el-card shadow="hover" :body-style="CARD_STYLE" class="asset__wrapper">
                    {{element.title}}
                </el-card>
            </template>
        </draggable>

    </div>
</template>

<script lang='ts' setup>
import Draggable from 'vuedraggable'
import { assetListGroup } from '~/constants/draggable/group'
import useGenerator from '~/composables/useGenerator'
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
}

.asset__wrapper {
    margin: 10px;
    color: gray;
    font-weight: 600;
}
</style>