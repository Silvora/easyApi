<template>

    <div class="jsonEditor">
        <slot name="Btn" :jsonData="jsonData"></slot>
        <p>{{ props.title }}</p>
        <json-editor-vue class="editor" v-model="jsonData" @blur="validate" language="['zh']" @change="handleChange" />
    </div>

</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, watch } from 'vue';
const jsonData = ref({
    //添加数据

})

const emit = defineEmits(['updateJson'])

const props = defineProps(['title', 'modeCode'])
console.log(props)
//const jsonValidate = ref(false)

// watchEffect(() => {
//     if (props.modeCode) {
//         jsonData.value = {
//             'data|1-10': [{
//                 // 属性 id 是一个自增数，起始值为 1，每次增 1
//                 'id|+1': 1,
//                 "name|1": [
//                     "AMD",
//                     "CMD",
//                     "UMD"
//                 ],
//                 "date": "2022-11-15"
//             }]
//         }
//         emit("updateJson", jsonData.value)
//     }
// })

watch(props, () => {

    jsonData.value = {
        'data|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name|1": [
                "AMD",
                "CMD",
                "UMD"
            ],
            "date": "2022-11-15"
        }]
    }
    emit("updateJson", jsonData.value)

})


const validate = async (editor: any) => {

    await editor.validate();
    // res 是错误列表，如果是空数组，则表示检测没有错误

    //console.log(err)
    //if (res.length === 0) {

    //console.log(jsonData.value)
    //emit("updateJson", { jsonData: jsonData.value, flg: true })
    //console.log(route)
    //jsonValidate.value = true
    //addMoke({ jsonData: jsonData.value, id: route.meta.id })

    //}
    // console.log(Notification.open())

};

// const handleFocus = () => {
//     console.log("first")
// }

const handleChange = () => {
    //console.log("////first")
    emit("updateJson", jsonData.value)
}
</script>

<style scoped>
.jsonEditor {
    font-weight: bold;
}

.editor {
    height: 230px;
    margin-bottom: 20px;
}
</style>