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

.tree-create-button {
  grid-area: left3;
}

.about-info {
  grid-area: content;
}
</style>
