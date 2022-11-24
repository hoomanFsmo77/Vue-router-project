<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="(item,index) in usersList" :key="index" class="col-md-4 my-4">
          <UserCard :email="item.email" :name="item.name" :phone="item.phone" :username="item.username"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref,onMounted} from "vue";
import UserCard from "../components/UserCard.vue";
export default {
  name: "Users",
  components: {UserCard},

  setup(){
    let usersList=ref([])
    onMounted(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
        usersList.value=response.data
      })
    })
    return {usersList}
  }
}
</script>

<style scoped>

</style>