<template>
    <Codemirror v-model="model" placeholder="Please code your schema here ..." :style="{ height: '400px' }"
        :autofocus="true" :extensions="extensions">
    </Codemirror>
</template>

<script lang='ts' setup>
import { Codemirror } from 'vue-codemirror'
import { computed, ref } from 'vue';
import { oneDark } from '@codemirror/theme-one-dark'
import { json } from '@codemirror/lang-json'

const props = defineProps<{
    modelValue: any
}>()
const emits = defineEmits(['update:modelValue'])

const extensions = [json(), oneDark]

const model = computed({
    get() {
        return props.modelValue
    },
    set(val: any) {
        emits('update:modelValue', val)
    }
})

</script>

<style lang="scss" scoped>
.editor__wrapper {
    height: 600px
}
</style>