import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import TreeList from '@/components/TreeList.vue'

const store = createStore({
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
  }
})

describe('TreeList.vue', () => {
  test('renders a list of family trees', async () => {

    const wrapper = mount(TreeList, {
      global: {
        plugins: [store]
      }
    })

    const elements = wrapper.findAll('li')

    expect(elements[0].text()).toBe('Schmidt Family Tree')
    expect(elements[1].text()).toBe('Lucas Family Tree')
    expect(elements[2].text()).toBe('Mills Family Tree')
  })
})
