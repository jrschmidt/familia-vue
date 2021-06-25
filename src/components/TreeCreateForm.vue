<template>
  <div class="tree-create-form primary-form">
    <p class="comp-label">This is the <strong>TreeCreateForm</strong> component.</p>
    <form action="">
      <h4>Create a New Family Tree</h4>
      <div class="input-text">
        <label for="tree-label">Label or title for new Family Tree</label>
        <input type="text" id="tree-label" v-model="value.treeLabel">
      </div>
      <div class="input-text">
        <label for="root-person-name">Name of the person who will be "root person" of this Family Tree</label>
        <input type="text" id="root-person-name" v-model="value.rootPersonName">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TreeCreateForm',
  data () {
    return {
      value: {
        treeLabel: '',
        rootPersonName: ''
      }
    }
  }
}
</script>

<style scoped>
  .tree-create-form {
    position: fixed;
    top: 10%;
    left: 40%;
    right: 10%;
  }

  h4 {
    color: #993333;
    text-decoration: underline;
  }
</style>
