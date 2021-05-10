<template>
  <div class="tree-view">
    <h5>Family Tree id: {{ treeId }}</h5>
    <h3>This is the H3 tag >>>{{ treeTitle }}</h3>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'TreeView',
  props: {
    treeId: String,
    treeTitle: String
  },
}
</script>
