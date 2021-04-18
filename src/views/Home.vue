<template>
  <div class="home">
    <TreeList msg="Tree list is empty."/>
    <TreeCreateNew status="not-yet"></TreeCreateNew>
    <SignIn status="not-yet"></SignIn>
    <AboutInfo></AboutInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import TreeList from '@/components/TreeList.vue'
import TreeCreateNew from '@/components/TreeCreateNew.vue'
import SignIn from '@/components/SignIn.vue'
import AboutInfo from '@/components/AboutInfo.vue'

export default {
  name: 'Home',
  components: {
    TreeList,
    TreeCreateNew,
    SignIn,
    AboutInfo
  }
}
</script>
