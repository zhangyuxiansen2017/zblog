<template>
  <div id="app">
    <HeaderTop/>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import "./common/static/default/css/style.css"
  import HeaderTop from './components/HeaderTop/HeaderTop.vue'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    name: 'App',
    components: {
      FooterGuide,
      HeaderTop
    }
  }
</script>

<style>

</style>
