<template>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      <a href=""> {{name}}</a>
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
  props:['name','username','email','phone']
}
</script>

<style scoped>

</style>