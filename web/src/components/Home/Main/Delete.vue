<template>

    <a-space>
        <a-input v-model:value="pathUrl">
            <template #addonBefore>
                <span>url:</span>
            </template>
            <a-button>url:</a-button>
        </a-input>
        <a-button type="primary" @click="handleApiSubmit">删除</a-button>
    </a-space>
    <Highlight :code="code"></Highlight>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { DeleteData } from "../../../api/crud"
import Highlight from "../Code/Highlight.vue"
const route = useRoute()

const { parentUrl, sonUrl } = route.meta


const url = "/api/" + parentUrl + "/" + sonUrl.toLocaleLowerCase() + "?id=1"

const pathUrl = ref(url)

const code = ref('')

const handleApiSubmit = () => {
    //console.log("first")
    //if (jsonValidate) {

    DeleteData(pathUrl.value).then((result: any) => {
        code.value = JSON.stringify(result, null, 2)
        console.log(result)
    }).catch((err: any) => {
        console.log(err)
    });
    //}
}

</script>

<style scoped>

</style>