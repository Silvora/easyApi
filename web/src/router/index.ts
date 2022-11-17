import {createRouter,createWebHistory} from "vue-router"
//import Home from "@/views/Home.vue"
import Error from "@/views/404.vue"
import Index from "@/components/Home/Index.vue"
const routes = [
    {
        path:"/",
        name:"Main",
        component: Index,
    },
    // {
    //     path:"/",
    //     name:"Home",
    //     component: Home,
    //     children:[  
    //         {
    //             path:"/",
    //             name:"Index",
    //             component: Index,
    //         }
    //     ]
    // },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        name:"404",
        component: Error
    }
   
    
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

// router.beforeEach((to: { fullPath: string | string[] },from: any,next: () => void)=>{
//     console.log(to,from)
//     if(to.fullPath.includes("/api")){
//        console.log("first")
//     }
//     next()
// })

export default router