<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>home page</h2>
    <ul>
      <li>
        <router-link
          to="/todo"
        >
          todos
        </router-link>
      </li>
      <br>
      <li>
        <router-link
          to="/contactus"
        >
         联系我们
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
