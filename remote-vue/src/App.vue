<template>
  <div class="vu-p-4">
    <div class="vu-bg-base-200 vu-p-4 vu-rounded-xl vu-shadow-xl">
      <h1 class="vu-text-2xl vu-font-bold">Hello from Vue Application</h1>
      <div class="vu-p-4">
        <div class="vu-navbar vu-bg-base-200">
          <div class="vu-navbar-start"></div>
          <div class="vu-navbar-center vu-lg:flex">
            <ul class="vu-menu vu-menu-horizontal vu-px-1">
              <li>
                <router-link to="/page-1">Products</router-link>
              </li>
              <li>
                <router-link to="/page-2">Categories</router-link>
              </li>
            </ul>
          </div>
          <div class="vu-navbar-end"></div>
        </div>
      </div>
      <div class="vu-bg-base-100 vu-p-4 vu-rounded-xl">
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