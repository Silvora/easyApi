<template>

    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane v-for="item in apiList" :key="item.method" :tab="item.method">
            <component :is="item.component"></component>
        </a-tab-pane>
        <!-- <a-tab-pane key="2" tab="Post" force-render>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="3" tab="Put">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="4" tab="Delete">Content of Tab Pane 4</a-tab-pane> -->
        <template #rightExtra>
            <a-button type="primary" @click="showModal">Headers配置</a-button>
        </template>
    </a-tabs>
    <a-modal v-model:visible="visible" title="Headers配置" @ok="handleOk" width="1000px">

        <Headers :formState="formState"></Headers>
    </a-modal>
</template>

<script lang="ts" setup>
import { ref, reactive, } from 'vue';
import Get from "./Get.vue"
import Post from "./Post.vue"
import Put from "./Put.vue"
import Delete from "./Delete.vue"
import Headers from "./Headers.vue"
const activeKey = ref("Get")
const visible = ref<boolean>(false);

const apiList = [
    {
        method: "Get",
        component: Get,
    },
    {
        method: "Post",
        component: Post,
    },
    {
        method: "Put",
        component: Put,
    },
    {
        method: "Delete",
        component: Delete
    }

]


const formState = reactive({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Credentials": "true",
    'Access-Control-Allow-Headers': 'token, Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
});


const showModal = () => {
    visible.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
    console.log(formState)
};
</script>

<style scoped>

</style>