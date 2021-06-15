<template>
  <div class="tree-create primary">
    <p class="comp-label">This is the <strong>TreeCreate</strong> component.</p>
    <button
      @click="formActive = true"
      v-bind:class="{formactive: formActive, noform: !formActive}"
    >
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

<style scoped>
  button {
    padding: 12px;
    border-radius: 12px;
    border-style: solid;
    font-size: 0.9rem;
    font-style: italic;
    text-decoration: underline;
    font-weight: bold;
  }

  .noform {
    border-color: #333333;
    color: #6666cc;
    background-color: #ccddcc;
  }

  .formactive {
    border-color: #999999;
    color: #999999;
    background-color: #cccccc;
  }
</style>
