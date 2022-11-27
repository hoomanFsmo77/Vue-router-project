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
import UserCard from "./UserCard.vue";
import useIndex from "../../composables/Users/useIndex.js";
export default {
  name: "showUser",
  components: {UserCard},
  setup(){
    const {mode,usersList}=useIndex()
    return {usersList,mode}
  }
}
</script>

<style scoped>

</style>