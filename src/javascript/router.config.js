import {createRouter,createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
import Posts from "./pages/Posts.vue";

const routes=[
    {path:'/',component:Home,name:'homePage'},
    {path:'/users',component:Users,name:'usersPage'},
    {path:'/posts',component:Posts,name:'postsPage'},
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router