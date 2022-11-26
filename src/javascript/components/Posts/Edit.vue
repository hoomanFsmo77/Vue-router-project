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
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-dark mx-2">Edit</button>
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

export default {
  name: "Edit",
  setup(){
    let route=useRoute()
    let mode=ref(false)
    let data=ref([])
    onMounted(function () {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(result=>{
        data.value=result.data
        mode.value=true
      })
    })


    return {mode,data}
  }
}
</script>

<style scoped>

</style>