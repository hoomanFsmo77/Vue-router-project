import {createRouter,createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
import Posts from "./pages/Posts.vue";
import FindUser from "./components/Users/FindUser.vue";
import ShowUsers from "./components/Users/ShowUsers.vue";

const routes=[
    {
        path:'/',
        component:Home,
        name:'homePage'},
    {
        path:'/users',
        component: Users,
        name:'usersPage',
        children:[
            {
                path:'',
                component:ShowUsers,
                name:'showUser',
            },
            {
                path:':id',
                component:FindUser,
                name:'findUser',
            }
        ]
    },
    {
        path:'/posts',
        component:Posts,
        name:'postsPage'
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router