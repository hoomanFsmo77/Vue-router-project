import {createRouter,createWebHistory} from "vue-router";
/////////////////// pages
const Home=()=> import('./pages/Home.vue')
const Users=()=>import('./pages/Users.vue')
const Posts=()=>import('./pages/Posts.vue')
////////////////// users component
const FindUser=()=>import('./components/Users/Find.vue')
const ShowUsers=()=>import('./components/Users/index.vue')
///////////////// posts component
const ShowPosts=()=>import('./components/Posts/index.vue')
const ShowPost=()=>import('./components/Posts/Show.vue')
const createPost=()=>import('./components/Posts/Create.vue')
const editPost=()=>import('./components/Posts/Edit.vue')

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
                component:ShowPost,
                name:'showPost',
            },{
                path:'create',
                component:createPost,
                name:'createPost',
            },{
                path:'edit/:id',
                component:editPost,
                name:'editPost',
                props:true
            }
        ]
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router