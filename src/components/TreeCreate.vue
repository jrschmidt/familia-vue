<template>
  <div class="tree-create primary">
    <p class="comp-label">This is the <strong>TreeCreate</strong> component.</p>
    <button @click="formActive = true">
      Create a new family tree
    </button>
    <TreeCreateForm v-if="formActive"></TreeCreateForm>
  </div>
</template>

<script>
import TreeCreateForm from '@/components/TreeCreateForm.vue'

export default {
  name: 'TreeCreate',
  components: {
    TreeCreateForm
  },
  data: () => {
    return {
      formActive: false
    }
  }

}
</script>
