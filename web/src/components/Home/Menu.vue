<template>
    <div style="width: 100%;height: 45px;" :key="componentKey">
        <a-space style="font-size: 20px;line-height: 45px;margin: 0 15px;float: right;">
            <a-tooltip>
                <a-popover trigger="click" v-model:visible="visible1">
                    <template #content>
                        <a-input placeholder="文件名称" v-model:value="fileName" @pressEnter="handleEnter" />
                    </template>
                    <template #title>新建文件</template>
                    <file-add-outlined />
                </a-popover>

            </a-tooltip>
            <a-tooltip>
                <a-popover trigger="click" v-model:visible="visible2">
                    <template #content>
                        <a-input placeholder="文件名称" v-model:value="fileName" @pressEnter="handleEnter" />
                    </template>
                    <template #title>新建文件夹</template>
                    <folder-add-outlined />
                </a-popover>
            </a-tooltip>
            <a-tooltip>
                <template #title>刷新资源</template>
                <reload-outlined @click="handleComponentUpdate" />
            </a-tooltip>
        </a-space>
    </div>
    <a-collapse accordion @change="collapseChange($event)">
        <a-collapse-panel v-for="item in data" :key="item.id" :header="item.title">

            <Collapse :listData="item.children" :url="item.title"></Collapse>
            <template #extra>
                <delete-outlined style="color:red" @click.stop="handleDeleteCollapse(item)" />
            </template>
        </a-collapse-panel>
    </a-collapse>
    <!-- <a-popover trigger="click" v-model:visible="visible">
        <template #content>
            <a-input placeholder="文件名称" v-model:value="fileName" @pressEnter="handleEnter" />
        </template>
        <a-button type="primary">Hover me</a-button>
    </a-popover> -->

</template>

<script lang="ts" setup>
import { AddPathUrl } from "../../api/crud"
import { reactive, ref } from 'vue';
import Collapse from "./Collapse.vue"
//import _ from "lodash"
import { FileAddOutlined, FolderAddOutlined, ReloadOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
//import { forEach } from "lodash"
import md5 from "js-md5"
import { addRouter } from "../../utils/router";
import { useRouter } from "vue-router";


const router = useRouter()
const componentKey = ref(1)
const data = reactive<any>([]);
const fileName = ref("")
const fileKey = ref(void 0)

const visible1 = ref<boolean>(false);
const visible2 = ref<boolean>(false);
//展开值
const collapseChange = (key: any) => {
    fileKey.value = key
}

//组件刷新
const handleComponentUpdate = () => {
    componentKey.value += 1
}

//判断在那个目录
const checkedData = (data: any) => {
    for (let item of data) {
        if (item.title === fileName.value) {
            return false
        }
    }

    return true
}

//回车添加文件
const handleEnter = () => {

    // console.log(fileKey.value)
    if (fileName.value == "") return message.warning("文件名称不能为空！！！")
    if (visible1.value) {
        let childData

        if (!data.length || !fileKey.value) {
            message.warning("请选择或创建一个文件夹！！！")
        } else if (fileKey.value) {
            for (let item of data) {
                if (item.id == fileKey.value) {
                    childData = item.children
                }
            }

            if (checkedData(childData)) {
                visible1.value = false
                newAddFile()
            } else {
                message.warning("文件已存在！！！")

            }
        }
    }

    if (visible2.value) {
        console.log(checkedData(data))
        if (checkedData(data)) {
            visible2.value = false
            newAddFiles()
        } else {
            message.warning("目录已存在！！！")

        }
    }
}

//删除文件
const handleDeleteCollapse = (item: any) => {
    data.forEach((value: any, idx: number) => {
        console.log(value)
        if (item.id == value.id) {
            data.splice(idx, 1)
        }
    })
}

//添加文件
const newAddFile = () => {
    let urlData = {
        id: "",
        parentUrl: "",
        sonUrl: ""
    }
    if (fileKey.value) {
        data.forEach((item: any) => {
            if (item.id == fileKey.value) {
                const uid = md5(fileName + String(Date.now()))
                urlData.id = uid
                urlData.parentUrl = item.title
                urlData.sonUrl = fileName.value
                item.children.push({
                    id: uid,
                    title: fileName.value,
                })
                httpAddApi(urlData)
            }
        })
    }
    fileName.value = ""

}

//添加文件夹
const newAddFiles = () => {
    // let len = data.length + 1
    data.push({
        id: md5(fileName + String(Date.now())),
        title: fileName.value,
        children: []
    })

    fileName.value = ""

}
const regPath = (data: any) => {
    //let a = "///dsadas"
    //let b = a.replace(/\/+/ig,"")

    for (let [key, value] of Object.entries(data)) {
        console.log(key, value)
        data[key] = String(value).replace(/\/+/ig, "")
    }

    return data
}

//api添加路径
const httpAddApi = (data: any) => {
    // console.log(data)
    //data = regPath(data)
    AddPathUrl(data).then((result: any) => {
        console.log(result)

        addRouter(router, result)
    }).catch((err: any) => {
        console.log(err)
    });
}
// watch(activeKey, val => {
//     console.log(val);
// });
</script>

<style scoped>

</style>