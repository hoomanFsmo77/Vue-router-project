import {createRouter,createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
import Posts from "./pages/Posts.vue";
import FindUser from "./components/Users/Find.vue";
import ShowUsers from "./components/Users/index.vue";
import ShowPosts from './components/Posts/index.vue'
import EditPost from "./components/Posts/Edit.vue";
const routes=[
    {
        path:'/',
        component:Home,
        name:'homePage'},
    {
        path:'/users',
        component: Users,
        name:'usersPage',
        redirect:{
            name:'showUser'
        },
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
        name:'postsPage',
        redirect:{
            name:'showPosts'
        },
        children: [
            {
                path:'',
                component:ShowPosts,
                name:'showPosts',
            },{
                path:':id',
                component:EditPost,
                name:'editPosts',
            }
        ]
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router