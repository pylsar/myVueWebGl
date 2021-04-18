<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
export default{
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100%;
    height: 100vh;
    background: black;
  }

</style>
