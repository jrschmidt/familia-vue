<template>
  <div class="tree-create-form primary-form">
    <p class="comp-label">This is the <strong>TreeCreateForm</strong> component.</p>
    <p>Enter name of the new family tree ...</p>
    <p>Enter the name of the person who will be the "root person" of this family tree ...</p>
  </div>
</template>

<script>
export default {
  name: 'TreeCreateForm'
}
</script>

<style scoped>
  .tree-create-form {
    position: fixed;
    top: 10%;
    left: 40%;
    right: 10%;
  }
</style>
