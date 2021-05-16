import { getters } from '../../src/store/getters.js'

const state = {

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

}

test('retrieves family tree title', () => {
  expect(getters.getTreeTitle(state, 'ft002')).toEqual('Lucas Family Tree')
})
