import { createStore } from 'vuex'
import getters from './getters'

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
  getters
})
