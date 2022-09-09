<script lang='ts'>
import { computed, defineComponent, h } from "vue"

export default defineComponent({
    name: 'RenderItem',
    props: ['is'],
    emits: ['update:modelValue'],
    setup(props, { slots, attrs, emit }) {
        console.log(props);
        
        const slot = slots.default ? slots.default?.() : []
        // const model = computed({
        //     set(val) {
        //         emit('update:modelValue', val)
        //     },
        //     get() {
        //         // return props.modelValue
        //     }
        // })
        return () => {
            return h('div', {}, [
                h(props.is, {
                    class: 'form-item-value'
                })
            ])

        }
    }

})
</script>
    
<style scoped>
.renderItem__wrapper {
    width: 300px;
    display: flex;
    align-items: center;
}
</style>