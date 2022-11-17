<template>

    <a-result title="一个简易Api制作的网站！">
        <template #icon>
            <smile-twoTone />
        </template>
        <template #extra>
            <a-button type="primary">Hello World!</a-button>
        </template>
    </a-result>

</template>

<script lang="ts" setup>
import { SmileTwoTone } from '@ant-design/icons-vue';

</script>

<style scoped>
div {
    color: red;
}
</style>