<template>

    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item v-for="item in headersList" :key="item" :label="item">
            <a-input v-model:value="formState[item]" />
        </a-form-item>
    </a-form>

    <a-divider orientation="left">自定义</a-divider>

</template>

<script lang="ts" setup>
//import { ref, reactive } from 'vue';
const labelCol = { style: { width: '250px' } }
const wrapperCol = { span: 14 }

const headersList = [
    "Content-Type",
    "Access-Control-Max-Age",
    "Access-Control-Allow-Origin",
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    "Access-Control-Allow-Credentials",
]

//const { formState } = defineProps({ formState: Object })
const { formState } = defineProps(['formState'])
// const onSubmit = () => {
//     console.log('submit!', formState);
// };

</script>

<style scoped>

</style>