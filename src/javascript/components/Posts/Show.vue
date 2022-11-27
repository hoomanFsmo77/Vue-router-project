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
import {ref,onMounted} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import Swal from 'sweetalert2'


export default {
  name: "Edit",
  setup(){
    let route=useRoute()
    let mode=ref(false)
    let deleteMode=ref(false)
    let data=ref([])
    onMounted(function () {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(result=>{
        data.value=result.data
        mode.value=true
      })
    })
    const deletePost = () => {
      deleteMode.value=true
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(res=>{
        deleteMode.value=false
        Swal.fire({
          title:'Thanks!',
          text:`Post(${route.params.id}) deleted successfully`,
          confirmButtonText:'Ok'
        })
      })
    }


    return {mode,data,route,deletePost,deleteMode}
  }
}
</script>

<style scoped>

</style>