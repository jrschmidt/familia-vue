<template>
  <div class="tree-list">
    <p>This is the <strong>TreeList</strong> component.</p>
    <div>
      <h5>TREES</h5>
      <ul id="treelistnames">
        <li v-for="tree in treeList" :key="tree.id">
          <router-link :to="{ name: 'TreeView', params: {id: tree.id} }">
            {{ tree.name }}
          </router-link>
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
    const treeList = computed(() => store.state.treeList)
    return {
      treeList
    }
  }
}
</script>

<style scoped lang="scss">
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
