<template>
  <div class="container mt-4">
    <div v-if="mode">
      <router-link class="btn btn-dark my-2" :to="{name:'createPost'}">Create Post</router-link>
    </div>
    <div class="row">
      <div  v-if="!mode" class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="col-4" v-if="mode" v-for="(item,index) in data" :key="index">
        <div class="card">
          <div class="card-header">
            <h6>
              <router-link :to="{name:'showPost',params:{id:item.id}}">
                {{item.title}}
              </router-link>
            </h6>
          </div>
          <div class="card-body">
            <p>
              {{item.body}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import {onMounted,ref} from "vue";

export default {
  name: "index",
  setup(){
    let mode=ref(false)
    let data=ref([])
    onMounted(function () {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(result=>{
        mode.value=true
        data.value=result.data
      })
    })

    return {mode,data}

  }
}
</script>

<style scoped>

</style>