<template>
  <Navbar/>
  <router-view v-slot="{Component}">
    <Transition name="fade">
      <component :is="Component"/>
    </Transition>
  </router-view>
</template>

<script>
/////////// style
import '../style/App.scss';
//////////// components
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components:{
    Navbar
  }

}
</script>
<style>
.fade-enter-active,.fade-leave-active{
  transition: all 400ms;
}
.fade-enter-from,.fade-leave-to{
  opacity: 0;
  transform: scale(90%);
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
  transform: scale(100%);
}


</style>
