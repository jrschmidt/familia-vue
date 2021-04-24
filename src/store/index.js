import { createStore } from 'vuex'

export default createStore({
  state: {
    testMsg: 'This is the test Vuex 4 message.',
    trees: [
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
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
