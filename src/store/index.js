import { createStore } from 'vuex'

export default createStore({
  state: {

    treeList: [
      {
        id: 'ft001',
        name: 'Schmidt Family Tree'
      },
      {
        id: 'ft002',
        name: 'Lucas Family Tree'
      },
      {
        id: 'ft003',
        name: 'Mills Family Tree'
      },
    ]
  },

  getters: {

    getTreeTitle: function (state, treeId) {
      return state.trees.find( tree => tree.id === treeId).name
    }
  }
})
