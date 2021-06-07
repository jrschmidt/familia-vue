<template>
  <div class="home">
    <TreeList></TreeList>
    <TreeCreateButton status="inactive"></TreeCreateButton>
    <SignIn status="not-yet"></SignIn>
    <AboutInfo></AboutInfo>
  </div>
</template>

<script>
import TreeList from '@/components/TreeList.vue'
import TreeCreateButton from '@/components/TreeCreateButton.vue'
import SignIn from '@/components/SignIn.vue'
import AboutInfo from '@/components/AboutInfo.vue'

export default {
  name: 'Home',
  components: {
    TreeList,
    TreeCreateButton,
    SignIn,
    AboutInfo
  }
}
</script>
