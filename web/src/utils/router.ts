//import router from "../router"
export function addRouter(router:any,path:any){
    const {url, parentUrl, sonUrl,id} = path
    //router.addRouter({})
    router.addRoute({
        path: url,
        name: parentUrl+"_"+sonUrl,
        meta:{id:id,parentUrl:parentUrl, sonUrl:sonUrl},
        component:()=>import(/* webpackChunkName: "about" */ '@/components/Home/Main.vue')
    })
    console.log("first",url,path,router.options)


}

