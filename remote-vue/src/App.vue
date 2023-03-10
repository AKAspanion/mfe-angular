<template>
  <div class="p-4">
    <div class="bg-base-200 p-4 rounded-xl shadow-xl">
      <h1 class="text-2xl font-bold">Hello from Vue Application</h1>
      <div class="p-4">
        <div class="navbar bg-base-200">
          <div class="navbar-start"></div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <router-link to="/page-1">Products</router-link>
              </li>
              <li>
                <router-link to="/page-2">Categories</router-link>
              </li>
            </ul>
          </div>
          <div class="navbar-end"></div>
        </div>
      </div>
      <div class="bg-base-100 p-4 rounded-xl">
        <router-view />
      </div>
    </div>
  </div>
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