<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue Router Project</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link active-class="active" :to="{name:'homePage'}" class="nav-link " >Home
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link :to="{name:'showUser'}" active-class="active" class="nav-link " >Users
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link :to="{name:'postsPage'}"  active-class="active" class="nav-link " >Posts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import '../../assets/symbol.png';
export default {
  name: "Navbar"
}
</script>

<style scoped>
  .active{
    border-bottom: 2px solid #333;
  }
</style>