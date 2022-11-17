<template>

    <a-space>
        <a-input v-model:value="pathUrl">
            <template #addonBefore>
                <span>url:</span>
            </template>
            <a-button>url:</a-button>
        </a-input>
        <a-button type="primary" @click="handleApiSubmit">修改</a-button>
    </a-space>
    <div style="margin-top: 20px;">
        <JsonEditor @updateJson="updateJson" :title="'修改数据：'"></JsonEditor>
        <Highlight :code="code"></Highlight>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PutData } from "../../../api/crud"
import JsonEditor from "../Code/JsonEditor.vue"
import Highlight from "../Code/Highlight.vue"
const route = useRoute()

const { parentUrl, sonUrl } = route.meta


const url = "/api/" + parentUrl + "/" + sonUrl.toLocaleLowerCase() + "?id=2"

const pathUrl = ref(url)



const jsonData = ref({
    //添加数据
    // id: "",
    // name: ""
})

const code = ref('')


const handleApiSubmit = () => {
    //console.log("first")
    PutData(pathUrl.value, jsonData.value).then((result: any) => {
        code.value = JSON.stringify(result, null, 2)
        // console.log(result)
    }).catch((err: any) => {
        console.log(err)
    });
}



const updateJson = (value: any) => {
    //console.log(value)
    jsonData.value = value
}

</script>

<style scoped>

</style>