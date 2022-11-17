<template>


    <a-tabs type="card">
        <a-tab-pane key="1" tab="基本表格">
            <a-table :columns="columns" :data-source="data">
                <template #headerCell="{ column }">
                    <template v-if="column.key === 'name'">
                        <span>
                            Name
                        </span>
                    </template>
                </template>

                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'name'">
                        {{ record.name }}
                    </template>
                    <template v-else-if="column.key === 'tags'">
                        <span>

                        </span>
                    </template>

                </template>
            </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="json数据">

            <!-- <highlightjs autodetect language="JSON" :code="code"></highlightjs> -->
            <Highlight :code="code"></Highlight>

        </a-tab-pane>
        <template #rightExtra>
            <a-button type="primary" @click="updateJson">刷新数据</a-button>
        </template>
    </a-tabs>


</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';
import Highlight from "../Code/Highlight.vue"
import Mock from "mockjs"




const code = ref('')
const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const props = defineProps({
    jsonData: Object
})

// const highlighter = (code: any) => {
//     return highlight(code.value, languages.js); //returns html
// }

//console.log(props.jsonData)
//let jsonData = props.jsonData

// for (let [key, value] of Object.entries(jsonData)) {
//     console.log(key, value)
// }

const updateJson = () => {
    const data = Mock.mock(props.jsonData)
    //console.log(data)
    code.value = JSON.stringify(data, null, 2)
}



watchEffect(() => {

    if (props.jsonData) {

        updateJson()
        //console.log(data)

        for (let [key, value] of Object.entries(data)) {
            //console.log(key, value)
        }
    }
})
// watch(props, (v, o) => {
//     console.log(v, o)
// })
</script>

<style scoped>
/* required class */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;
    width: 100%;
    height: 300px;
    background-color: red;
    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
</style>