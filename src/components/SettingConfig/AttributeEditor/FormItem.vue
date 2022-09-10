<template>
    <div class='formItem_wrapper'>
        <div class="formKey">{{title}}:</div>
        <component :is="formTag" v-model="model" class="formValue">
            <template v-if="options">
                <el-option v-for="(option,index) in options" :key="index" :label="option.label" :value="option.value">
                </el-option>
            </template>
        </component>
    </div>
</template>>
<script lang='ts'>
import { computed, defineComponent } from "vue"
import { ElInput, ElSelect, ElOption } from 'element-plus'

export default defineComponent({
    name: 'FormItem',
    // formTag -属性对应显示那种组件
    // formKey -属性key
    // title -属性中文名
    // options -如果是select组件 对应渲染options子组件
    props: ['formTag', 'title', 'modelValue', 'options', 'formKey'],
    emits: ['update:modelValue'],
    components: { ElInput, ElSelect, ElOption },
    setup(props, { emit }) {
        const model = computed({
            set(val) {
                emit('update:modelValue', props.formKey, val)
            },
            get() {
                return props.modelValue
            }
        })
        return {
            model
        }
    }
})
</script>
    
<style scoped>
.formItem_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
}

.formKey {
    font-size: 12px;
    color: gray;
    flex-basis: 100px;
}

.formValue {
    flex: 1;
}
</style>