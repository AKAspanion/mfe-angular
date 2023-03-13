<template>
  <router-view />
</template>
<script >
import { defineComponent, watch } from "vue"
import { useRoute } from "vue-router"
import "./App.css"

let nextPath = "";

export default defineComponent({
  mounted() {
    window.addEventListener('[shell-vue] navigated', (d) => {
      const path = d.detail;
      if (nextPath !== path) {
        this.$router.push({ path });
      } else {
        window.dispatchEvent(
          new CustomEvent('[remote-vue] navigated', { detail: `/remote-vue${path}` })
        );
      }
    }, false);

    window.dispatchEvent(new CustomEvent('[remote-vue] mounted'));
  },
  setup() {
    const route = useRoute()

    watch(
      () => route.fullPath,
      (pathname) => {
        nextPath = pathname;
        window.dispatchEvent(
          new CustomEvent('[remote-vue] navigated', { detail: `/remote-vue${pathname}` })
        );
      },
      { flush: 'pre', immediate: true, deep: true }
    )
  },
})
</script> 

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>