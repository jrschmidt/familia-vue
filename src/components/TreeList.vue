<template>
  <div class="tree-list">
    <p>This is the <strong>TreeList</strong> component.</p>
    <p class="fm-msg">msg: <em>{{ msg }}</em></p>
  </div>
</template>

<script>
export default {
  name: 'TreeList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
