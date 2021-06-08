<template>
  <div class="tree-view-header primary">
    <p class="comp-label">This is the <strong>TreeViewHeader</strong> component.</p>
    <h5>Family Tree id: {{ treeId }}</h5>
    <h3>{{ treeName }}</h3>
    <h4>Root person: {{ rootPerson }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TreeView',
  // setup(props) {
  //   const treeId = props.treeId
  //   const treeName = props.treeName
  //   const rootPerson = props.rootPerson
  //   return {
  //     treeId,
  //     treeName,
  //     rootPerson
  //   }
  // },
  props: ['treeId', 'treeName', 'rootPerson']
}
</script>
