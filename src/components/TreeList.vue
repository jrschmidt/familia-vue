<template>
  <div class="tree-list">
    <p>This is the <strong>TreeList</strong> component.</p>
    <div>Vuex test message: {{ testMsg }}</div>
    <div>
      <h5>TREES</h5>
      <ul id="treelistnames">
        <li v-for="tree in trees" :key="tree.id">
          {{ tree.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'TreeList',
  setup () {
    const store = useStore()
    const trees = computed(() => store.state.trees)
    const testMsg = computed(() => store.state.testMsg)
    return {
      trees,
      testMsg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
h5 {
  margin: 3px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
a {
  color: #42b983;
}
</style>
