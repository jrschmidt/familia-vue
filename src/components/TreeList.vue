<template>
  <div class="tree-list">
    <p>This is the <strong>TreeList</strong> component.</p>
    <div>Vuex test message: {{ testMsg }}</div>
    <div>TREES: </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'TreeList',
  setup () {
    const store = useStore()
    const testMsg = computed(() => store.state.testMsg)
    return {testMsg}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
