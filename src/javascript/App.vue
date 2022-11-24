<template>
  <Navbar/>
  <router-view></router-view>
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
