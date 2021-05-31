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
    ],

    persons: [
      {
        id: 'p0001',
        lastname: 'Schmidt',
        firstname: 'John'
      },

      {
        id: 'p0002',
        lastname: 'Margaret',
        firstname: 'Lucas'
      },

      {
        id: 'p0003',
        lastname: 'Mills',
        firstname: 'Marilyn'
      }
    ]

  }

})
