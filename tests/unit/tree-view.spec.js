import { mount, shallowMount } from '@vue/test-utils'
import TreeView from '@/views/TreeView.vue'

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
