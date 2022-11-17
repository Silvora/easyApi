<template>
    <div v-if="props.code" class="highlight">
        <p>返回数据：</p>
        <highlightjs class="code" autodetect language="JSON" :code="props.code"></highlightjs>
    </div>

</template>

<script lang="ts" setup>

const props = defineProps(['code'])




</script>

<style scoped>
.highlight {
    margin-top: 20px;
    font-weight: bold;
}

.code {
    height: calc(100vh - 465px);
    overflow-y: auto;
}
</style>