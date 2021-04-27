import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import TreeList from '@/components/TreeList.vue'
import TreeCreateButton from '@/components/TreeCreateButton.vue'
import SignIn from '@/components/SignIn.vue'
import AboutInfo from '@/components/AboutInfo.vue'

describe('Home.vue', () => {
  it('renders all required child components', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.findComponent(TreeList).exists()).toBe(true)
    expect(wrapper.findComponent(TreeCreateButton).exists()).toBe(true)
    expect(wrapper.findComponent(SignIn).exists()).toBe(true)
    expect(wrapper.findComponent(AboutInfo).exists()).toBe(true)
  })
})
