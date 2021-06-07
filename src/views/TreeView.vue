<template>
  <div class="tree-view">
    <TreeViewHeader
      :treeId="treeId"
      :treeName="treeName"
      :rootPerson="rootPerson"
    >
    </TreeViewHeader>
    <TreeViewDisplay></TreeViewDisplay>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import TreeViewHeader from '@/components/TreeViewHeader'
import TreeViewDisplay from '@/components/TreeViewDisplay'


export default {
  name: 'TreeView',
  components: {
    TreeViewHeader,
    TreeViewDisplay
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const treeId = computed(() => route.params.id)
    const tree = computed(() => store.state.treeList.find( tree => tree.id === treeId.value))
    const treeName = computed(() => tree.value.name)
    const rootPerson = computed(() => tree.value.rootPerson)
    return {
      treeId,
      tree,
      treeName,
      rootPerson
    }
  }
}
</script>
