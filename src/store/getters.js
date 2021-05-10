export function getTreeTitle (state, treeId) {
  return state.trees.find( tree => tree.id === treeId).name
}

// const getters = () => {
//   return {
//     getTreeTitle
//   }
// }
//
// export default { getters }
