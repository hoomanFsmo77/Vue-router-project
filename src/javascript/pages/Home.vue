<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum in laborum necessitatibus nisi optio perferendis quod? A aliquam assumenda, culpa fugit hic, ipsum obcaecati officia, quo ratione rerum soluta veniam.
        </p>
        <button @click="redirectTo('usersPage')" class="btn btn-dark mx-2 my-4">Users</button>
        <button @click="redirectTo('postsPage')" class="btn btn-outline-secondary mx-2 my-4">Posts</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from 'vue-router'
export default {
  name: "Home",
  setup(){
    let router=useRouter()
    const redirectTo = page => {
      router.push({
        name:page
      })
    }

    return {redirectTo}
  }
}
</script>

<style scoped>

</style>