<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <h1>Create Post</h1>
        <div class="mt-4">
          <label class="my-2" for="title">Title</label>
          <input v-model="title" type="text" class="form-control" id="title">
        </div>
        <div class="mt-4">
          <label class="my-2" for="body">Body</label>
          <textarea v-model="body" type="text" class="form-control" id="body" rows="6"></textarea>
        </div>
        <button @click="createPost" class="btn btn-dark mt-2">
          Create Post
          <span v-if="mode" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import Swal from 'sweetalert2'

export default {
  name: "Create",
  setup(){
    let title=ref('')
    let body=ref('')
    let mode=ref(false)

    const createPost = () => {
      mode.value=true
      axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:title.value,
        body:body.value
      }).then(result=>{
        mode.value=false
        Swal.fire({
            title:'Thanks!',
            text:'Post created successfully',
          confirmButtonText:'Ok'

        })
      })
    }

    return {createPost,title,body,mode}

  }

}
</script>

<style scoped>

</style>