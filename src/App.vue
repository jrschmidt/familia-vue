<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.primary {
  margin: 5px;
  padding: 14px;
  background-color: #ccccdd;
  border-radius: 30px;
}

.primary-form {
  margin: 5px;
  background-color: #ccddcc;
  border-radius: 10px;
  border-color: #993333;
  border-style: double;
}

.comp-label {
  color: #6666cc;
  font-size: 0.7rem;
  font-style: italic;
  text-decoration: underline;
}

input {
  margin-left: 14px;
}

label {
  display: inline-block;
  text-align: right;
  width: 200px;
  font-size: 0.8rem;
}

.input-text {
  margin: 30px 0 20px 0;
}
</style>
