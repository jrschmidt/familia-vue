import { createStore } from 'vuex'
import { mount, shallowMount } from '@vue/test-utils'
import TreeView from '@/views/TreeView.vue'

const store = createStore({
  state: {
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
})

describe('TreeView component', () => {

  test('renders TreeView component', () => {
    const wrapper = shallowMount(TreeView)
    expect(wrapper.html()).toContain('tree-view')
  })

  test('points to the designated family tree', () => {
    const wrapper = mount(TreeView, {
      props: {
          treeId: 'ft002'
        }
    })
    expect(wrapper.find('h5').text()).toContain('ft002')
  })

  test.skip('displays title of the family tree', () => {
    const wrapper = mount(TreeView, {
      global: {
        plugins: [store]
      },
      props: {
          treeId: 'ft002'
        }

    })
    expect(wrapper.find('h3').text()).toContain('Lucas Family Tree')
  })

})
