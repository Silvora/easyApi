<template>
    <a-space>
        <a-input v-model:value="pathUrl">
            <template #addonBefore>
                <span>url:</span>
            </template>
            <a-button>url:</a-button>
        </a-input>
        <a-button type="primary" @click="handleApiSubmit">测试</a-button>
    </a-space>
    <!-- <div v-if="code" style="margin-top: 20px;">
        <p>返回数据：</p>
        <highlightjs autodetect language="JSON" :code="code"></highlightjs>
    </div> -->
    <Highlight :code="code"></Highlight>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { GetData } from "../../../api/crud"

import Highlight from "../Code/Highlight.vue"

const route = useRoute()

const { parentUrl, sonUrl } = route.meta


const url = "/api/" + parentUrl + "/" + sonUrl.toLocaleLowerCase()

const pathUrl = ref(url)

const code = ref('')
const handleApiSubmit = () => {
    //console.log("first", pathUrl)
    const url = pathUrl.value
    GetData(url).then((result: any) => {
        code.value = JSON.stringify(result, null, 2)
        console.log(result)
    }).catch((err: any) => {
        console.log(err)
    });
}
</script>

<style scoped>

</style>