<template>
    <div class="container mt-4">
      <div class="row">
        <div  v-if="!mode" class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="mode" v-for="(item,index) in usersList" :key="index" class="col-md-4 my-4">
          <UserCard :email="item.email" :id="item.id" :name="item.name" :phone="item.phone" :username="item.username"/>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import {ref,onMounted} from "vue";
import UserCard from "./UserCard.vue";
export default {
  name: "showUser",
  components: {UserCard},
  setup(){
    let usersList=ref([])
    let mode=ref(false)
    onMounted(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
        usersList.value=response.data
        mode.value=true
      })
    })
    return {usersList,mode}
  }
}
</script>

<style scoped>

</style>