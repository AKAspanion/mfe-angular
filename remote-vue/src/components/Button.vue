<template>
    <button type="button"
        className="vu-text-black vu-bg-primary hover:vu-bg-primary-focus vu-font-medium vu-rounded-lg vu-text-sm vu-px-5 vu-py-2 focus:vu-outline-none">
        {{ label }}
    </button>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: 'Button',
    props: {
        label: String
    },
    setup(props) {
        props.label = ''
    }
});
</script>