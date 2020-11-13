<template>
  <div id="hello">
    <Header/>
    <Menu/>
    <Content/>
    Router 추가
  </div>
</template>

<script>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
import Content from "./Content.vue";

export default {
  /* name: 'HelloWorld_2', */
  components: {
    Header,
    Menu,
    Content
  }
}
</script>

