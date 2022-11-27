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
import useFind from "../../composables/Users/useFind.js";
import UserCard from "./UserCard.vue";
export default {
  name: "FindUser",
  components:{UserCard},
  setup(){
    const {mode,userInfo}=useFind()
    return {userInfo,mode}
  }
}
</script>

<style scoped>

</style>