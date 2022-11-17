<template>

    <div class="main" :key="routeKey">
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="数据配置">
                <!-- <Editor @updateJson="updateJson"></Editor> -->

                <JsonEditor @updateJson="updateJson" :modeCode="modeCode">
                    <template #Btn>
                        <a-space>
                            <a-button type="primary" @click="handleMockData">基本模版</a-button>
                            <a-button>说明</a-button>
                            <a-alert message="修改数据源，记得保存^_^" type="warning" show-icon banner />

                        </a-space>
                        <a-button style="float: right;" type="primary" @click="handleMockSven">保存</a-button>
                    </template>
                </JsonEditor>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="数据样例">
                <Data :jsonData="jsonData"></Data>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Api">
                <Api></Api>
            </a-collapse-panel>
        </a-collapse>
    </div>

</template>

<script lang="ts" setup>
//import Editor from "./Main/Editor.vue"
import JsonEditor from "./Code/JsonEditor.vue"
import Data from "./Main/Data.vue";
import Api from "./Main/Api.vue"
import { AddMokeJson } from "../../api/crud";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()


const activeKey = ref(1)
const jsonData = ref({})
const routeKey = ref("router")
const modeCode = ref(1)

router.beforeEach((to: any, from: any, next: () => void) => {
    // to and from are both route objects. must call `next`.
    //console.log(to, from)
    routeKey.value = from.meta.id
    activeKey.value = 1
    next()
})

onMounted(() => {
    routeKey.value = router.currentRoute.value.meta.id
})

const handleMockData = () => {
    //console.log("first")
    modeCode.value += 1
    //modeFlg.value = false

    // setInterval(() => {
    //     modeFlg.value = false
    // }, 1000)

}

const handleMockSven = () => {
    //console.log(jsonData.value)
    const data = { jsonData: jsonData.value, id: routeKey.value }
    AddMokeJson(data).then((result: any) => {
        console.log(result)
    }).catch((err: any) => {
        console.log(err)
    });
}

// const route = useRoute()
// const routeKey = route.path
// console.log(route, routeKey)
const updateJson = (value: any) => {
    //console.log(value)
    jsonData.value = value
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    overflow-y: auto;

}
</style>