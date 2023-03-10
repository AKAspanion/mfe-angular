<template>
  <nav class="vue-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/page-1">Page 1</router-link> |
    <router-link to="/page-2">Page 2</router-link>
  </nav>
  <router-view />
</template>
<script >
import { defineComponent, watch } from "vue"
import { useRoute } from "vue-router"

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav.vue-nav {
  padding: 30px;
}

nav.vue-nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav.vue-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script></script>
