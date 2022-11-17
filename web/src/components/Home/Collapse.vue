<template>
    <a-list size="small" bordered :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item @click="apiText(item)">
                {{ item.title }}
            </a-list-item>
        </template>


    </a-list>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const props = defineProps({
    listData: Array,
    url: String,
})
const data = props.listData
//const pathName = "/"+url+"/"+
//console.log(props.listData)
const router = useRouter()
const apiText = (item: any) => {
    //console.log("sda", item, props.url)
    //message.success('This is a success message')
    router.push({
        path: "/" + props.url + "/" + item.title
    })

}
</script>

<style scoped>
.ant-list-item {
    cursor: pointer;
}

.ant-list-item:hover {
    background-color: #ccc;
}
</style>