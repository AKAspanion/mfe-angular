<template>
  <div class="vu-hello">
    Vue Remote Create App Content
    <div class="vu-test-scoped">
      Scoped: <span data="VUE_IN_ANGULAR_INTERACTION_TEXT">{{ msg }}</span>
    </div>
    <div class="vu-test">Not Scoped: {{ msg }}</div>
    <div>
      <button @click="click" data="VUE_IN_ANGULAR_BUTTON">Click Me</button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.test {
  color: #0a340a;
}
</style>
<style scoped>
.hello {
  padding: 20px;
}

.test-scoped {
  opacity: 0.8;
}
</style>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: String,
    };
  },
  mounted() {
    this.msg = 'Some Content';
  },
  methods: {
    click() {
      this.msg = 'Click Works';
    },
  },
};
</script>
