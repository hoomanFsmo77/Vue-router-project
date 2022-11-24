<template>
  <div class="card" >
    <div class="card-header">
      <router-link :to="{path:`/users/${id}`}">{{name}}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: {{username}}</li>
      <li class="list-group-item">Email: {{email}}</li>
      <li class="list-group-item">Phone: {{phone}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props:['name','username','email','phone','id']
}
</script>

<style scoped>

</style>