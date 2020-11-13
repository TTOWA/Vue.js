<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
    </div>
  </div>
</template>

<script>

//import Header from "./components/Header.vue";
//import Menu from "./components/Menu.vue";
//import Content from "@/components/Content.vue";

export default {
  name: 'App',
  /* components: {
    Header,
    Menu,
    Content
  } */
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
