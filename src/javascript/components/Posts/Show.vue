<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <div  v-if="!mode" class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="card" v-if="mode">
          <div class="card-header">
            <h6>
              {{data.title}}
            </h6>
          </div>
          <div class="card-body">
            <p>
              {{data.body}}
            </p>
          </div>
          <div class="card-footer">
            <button @click="deletePost" class="btn btn-danger">
              Delete
              <span v-if="deleteMode" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
            <router-link  class="btn btn-dark mx-2"  :to="{name:'editPost',params:{id:route.params.id}}">Edit</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import useShow from "../../composables/Posts/useShow.js";

export default {
  name: "Edit",
  setup(){
    const {data,deleteMode,deletePost,mode,route}=useShow()
    return {mode,data,route,deletePost,deleteMode}
  }
}
</script>

<style scoped>

</style>