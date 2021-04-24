<template>
  <div id="app">
    <Navbar />
    <transition name="page">
      <router-view/>
    </transition>  
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
  .page-enter-active {
    animation: page-in .5s reverse;
  }
  .page-leave-active {
    animation: page-in .5s;
  }
  @keyframes page-in  {
    0% {
      transform: scale(.7);
      overflow: hidden;
    }
    100% {
      transform: scale(0);
      overflow: hidden;
    }
  }


</style>
