<template>
    <div class="hello">
        <h2>todos</h2>
        <ul>
            <li>
                todos
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Todos',
    data() {
        return {
            data: []
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
}</style>
  