<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="createPost" class=" needs-validation" novalidate>
          <h1>Edit Post</h1>
          <div class="mt-4  has-validation">
            <label class="my-2 " for="title">Title</label>
            <input v-model.trim="title" type="text" class="form-control" id="title" required>
            <div class="invalid-feedback d-block" v-if="title.length < 1">
              Title is required.
            </div>

          </div>
          <div class="mt-4  has-validation">
            <label class="my-2 " for="body">Body</label>
            <textarea v-model.trim="body" type="text" class="form-control" id="body" rows="6" required> </textarea>
            <div class="invalid-feedback d-block"  v-if="body.length < 1">
              Body is Required.
            </div>
          </div>
          <button class="btn btn-dark mt-2">
            edit Post
            <span v-if="mode" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useEditPost from "../../composables/Posts/useEdit.js";
export default {
  name: "Edit",
  props:['id'],
  setup(props){
    const {body,createPost,mode,title}=useEditPost(props)
    return {title,body,createPost,mode}
  }
}
</script>

<style scoped>

</style>