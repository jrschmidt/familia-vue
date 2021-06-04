<template>
  <div class="tree-view">
    <h5>Family Tree id: {{ treeId }}</h5>
    <h3>{{ tree.name }}</h3>
    <h4>Root person: {{ tree.rootPerson }}</h4>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
  name: 'TreeView',
  setup() {
    const route = useRoute()
    const store = useStore()
    const treeId = computed(() => route.params.id)
    const tree = computed(() => store.state.treeList.find( tree => tree.id === treeId.value))
    return {
      treeId,
      tree
    }
  }
}
</script>
