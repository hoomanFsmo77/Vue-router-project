<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 col-12">
        <div  v-if="!mode" class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <UserCard v-if="mode" :email="userInfo.email" :id="userInfo.id" :name="userInfo.name" :phone="userInfo.phone" :username="userInfo.username"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {useRoute} from 'vue-router'
import {ref,onMounted} from "vue";
import UserCard from "./UserCard.vue";
export default {
  name: "FindUser",
  components:{UserCard},
  setup(){
    let userInfo=ref(null)
    let mode=ref(false)
    const route=useRoute()
    onMounted(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`).then(response=>{
        userInfo.value=response.data
        mode.value=true
      })
    })
    return {userInfo,mode}
  }
}
</script>

<style scoped>

</style>