<template>
  <p>
    This is the home page of vue application.
  </p>
  <p v-if="!standalone">You can visit the standalone deployed Vue App here: </p>
  <a v-if="!standalone" class="vu-underline vu-text-primary hover:vu-text-gray-500" href="https://remote-vue.netlify.app/"
    target="_blank">Standalone Vue</a>

  <div className="vu-py-4">
    <h3 v-if="!standalone" className="vu-text-lg vu-font-medium">Data sharing</h3>
    <p>Update the app name in Vue Store.</p>
    <p v-if="!standalone">This data is shared with Angular shell, since it is subscribed to this app's state change.</p>
    <p v-if="!standalone">Navigate to Angular app home page to see the updated name.</p>
    <div className="vu-py-2">
      <input type="text" :value="textInput" placeholder="Enter new app name" @input="textInput = $event.target.value"
        className="vu-bg-gray-50 vu-border vu-border-gray-300 vu-text-gray-900 vu-text-sm vu-rounded-lg focus:vu-ring-primary focus:vu-border-primary vu-outline-none focus:vu-outline-none vu-block vu-w-full vu-p-2.5" />
      <div className="vu-p-1"></div>
      <button type="button" @click="setInput"
        className="vu-text-black vu-bg-primary hover:vu-bg-primary-focus vu-font-medium vu-rounded-lg vu-text-sm vu-px-5 vu-py-2 focus:vu-outline-none">
        Update
      </button>
    </div>
    <div>
      Current App name: <span class="vu-font-bold">{{ appName }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { useAppStore } from "@/store/app";
export default defineComponent({
  name: 'HomeView',
  data() {
    return { textInput: "" }
  },
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  computed: {
    standalone() {
      return this.appStore.isStandalone;
    },
    appName() {
      return this.appStore.appName || "-";
    },
  },
  methods: {
    setInput() {
      this.appStore.setAppName(this.textInput)
    }
  }
});
</script>