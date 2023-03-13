<template>
  <p>
    This is the home page of vue application.
  </p>
  <p v-if="isInContainer">You can visit the standalone deployed Vue App here: </p>
  <a v-if="isInContainer" class="vu-underline vu-text-primary hover:vu-text-gray-500"
    href="https://remote-vue.netlify.app/" target="_blank">Standalone React</a>
</template>

<script>
import { defineComponent } from "vue"
import { useAppStore } from "@/store/app";
export default defineComponent({
  name: 'HomeView',
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  computed: {
    isInContainer() {
      return this.appStore.isInContainer;
    },
  },
});
</script>
<style>
img {
  padding: 0px 2rem;
}
</style>
