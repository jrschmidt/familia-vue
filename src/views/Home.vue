<template>
  <div class="home">
    <TreeList></TreeList>
    <TreeCreate status="inactive"></TreeCreate>
    <SignIn status="not-yet"></SignIn>
    <AboutInfo></AboutInfo>
  </div>
</template>

<script>
import TreeList from '@/components/TreeList.vue'
import TreeCreate from '@/components/TreeCreate.vue'
import SignIn from '@/components/SignIn.vue'
import AboutInfo from '@/components/AboutInfo.vue'

export default {
  name: 'Home',
  components: {
    TreeList,
    TreeCreate,
    SignIn,
    AboutInfo
  }
}
</script>

<style media="screen">
  .home {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-areas:
      "left1 content"
      "left2 content"
      "left3 content";
  }

  .sign-in {
    grid-area: left1;
  }

.tree-list {
  grid-area: left2;
}

.tree-create {
  grid-area: left3;
}

.about-info {
  grid-area: content;
}
</style>
