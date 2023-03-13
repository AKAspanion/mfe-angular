<template>
    <input type="text" v-model="value" :placeholder="placeholder"
        className="vu-bg-gray-50 vu-border vu-border-gray-300 vu-text-gray-900 vu-text-sm vu-rounded-lg focus:vu-ring-primary focus:vu-border-primary vu-outline-none focus:vu-outline-none vu-block vu-w-full vu-p-2.5" />
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: 'Input',
    props: {
        value: String,
        placeholder: String,
    },
    methods: {
        onChange(v) {
            this.$emit('input', v);
        }
    },
    setup(props) {
        props.value = '';
        props.placeholder = '';
    },
});
</script>