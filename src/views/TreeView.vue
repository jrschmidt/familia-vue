<template>
  <div class="tree-view">
    <h5>Family Tree id: {{ treeId }}</h5>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'TreeView',
  props: {
    treeId: String
  },
}
</script>
