<template>
  <div class="tree-create primary">
    <p class="comp-label">This is the <strong>TreeCreate</strong> component.</p>
    <p>The <em>Create New Family Tree</em> button goes here.</p>
    <TreeCreateForm></TreeCreateForm>
  </div>
</template>

<script>
import TreeCreateForm from '@/components/TreeCreateForm.vue'

export default {
  name: 'TreeCreate',
  components: {
    TreeCreateForm
  }
}
</script>
