export const getters = {

  getTreeTitle: function (state, treeId) {
    return state.trees.find( tree => tree.id === treeId).name
  }
}
