import { shallowMount } from '@vue/test-utils'
import TreeView from '@/views/TreeView.vue'

test('renders TreeView component', () => {
  const wrapper = shallowMount(TreeView)
  expect(wrapper.html()).toContain('tree-view')
})
