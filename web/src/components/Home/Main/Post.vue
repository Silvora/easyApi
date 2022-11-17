<template>

    <a-space>
        <a-input v-model:value="pathUrl">
            <template #addonBefore>
                <span>url:</span>
            </template>
            <a-button>url:</a-button>
        </a-input>
        <a-button type="primary" @click="handleApiSubmit">添加</a-button>
    </a-space>
    <div style="margin-top: 20px;">

        <!-- <json-editor-vue class="editor" v-model="jsonData" :showBtns="false" @blur="validate" language="['zh']" /> -->
        <JsonEditor @updateJson="updateJson" :title="'添加数据：'"></JsonEditor>
        <Highlight :code="code"></Highlight>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { PostData } from "../../../api/crud"

import JsonEditor from "../Code/JsonEditor.vue"
import Highlight from "../Code/Highlight.vue"
const route = useRoute()

const { parentUrl, sonUrl } = route.meta


const url = "/api/" + parentUrl + "/" + sonUrl.toLocaleLowerCase()

const pathUrl = ref(url)


const jsonData = ref({
    //添加数据

})

const code = ref('')

//const jsonValidate = ref(false)

const handleApiSubmit = () => {
    //console.log("//////////", jsonData.value)
    //nextTick()
    PostData(pathUrl.value, jsonData.value).then((result: any) => {
        code.value = JSON.stringify(result, null, 2)
        // console.log(result)
    }).catch((err: any) => {
        console.log(err)
    })

}

const updateJson = (value: any) => {
    //console.log(value)
    jsonData.value = value
}


// const validate = async (editor: any) => {

//     const res = await editor.validate();
//     // res 是错误列表，如果是空数组，则表示检测没有错误

//     //console.log(err)
//     if (res.length === 0) {
//         //console.log(res, editor, jsonData.value)
//         //emit("updateJson", jsonData.value)
//         //console.log(route)
//         jsonValidate.value = true
//         //addMoke({ jsonData: jsonData.value, id: route.meta.id })
//     } else {
//         jsonValidate.value = false
//     }
//     // console.log(Notification.open())

// };

</script>

<style scoped>
.title {
    font-weight: bold;
}
</style>