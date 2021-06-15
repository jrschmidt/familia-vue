import { createStore } from 'vuex'

export default createStore({
  state: {

    treeList: [
      {
        id: 'ft001',
        name: 'Schmidt Family Tree',
        rootPerson: 'John Schmidt',
        rootPersonId: 'p0001'
      },
      {
        id: 'ft002',
        name: 'Lucas Family Tree',
        rootPerson: 'Margaret Lucas',
        rootPersonId: 'p0002'
      },
      {
        id: 'ft003',
        name: 'Mills Family Tree',
        rootPerson: 'Marilyn Mills',
        rootPersonId: 'p0003'
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
    ],

    idGeneratorData: {
      treeList: {
        prefixString: 'ft',
        numberOfNumericDigits: 3,
        lastSerialNumber: 3
      },

      persons: {
        prefixString: 'p',
        numberOfNumericDigits: 4,
        lastSerialNumber: 3
      }
    }

  },
  mutations: {
    incrementIdNumbers (state, idType) {
      state.idGeneratorData[idType].lastSerialNumber ++
    }
  },
  actions: {}

})
