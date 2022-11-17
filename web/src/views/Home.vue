<template>

    <a-layout data-background-color="dark">
        <a-layout-header>
            <div>
                <img class="logoImg" :src="logo" alt="logo" />
                <a-switch v-model:checked="checked" @change="switchBtn">
                    <template #checkedChildren>
                        <!-- 默认 -->
                        <bulb-filled style="color: #fff;" />
                    </template>
                    <template #unCheckedChildren>
                        <!-- 开启 -->
                        <bulb-filled style="color: #000;" />
                    </template>
                </a-switch>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider style="flex: 0 0 25%; max-width: 25%; min-width: 25%; width: 25%;">
                <Menu></Menu>
            </a-layout-sider>
            <a-layout-content>
                <!-- <Main>
                </Main> -->
                <router-view></router-view>

            </a-layout-content>
        </a-layout>
    </a-layout>

</template>
  
<script lang="ts" setup >
import Menu from "@/components/Home/Menu.vue"
import Main from "@/components/Home/Main.vue"
import logo from "@/assets/favicon.ico"
import { BulbFilled } from '@ant-design/icons-vue';
import { ref } from "vue"

const checked = ref(false);

const switchBtn = (checked: boolean | string | number) => {
    console.log(checked)
    console.log(document.body.style)
    if (checked) {
        document.body.style.setProperty("--bgColor", "#383737")
        document.body.style.setProperty("--boxBgColor", "#191919")
        document.body.style.setProperty("--boxBorder", "#ccc")
        document.body.style.setProperty("--color", "#fff")
    } else {
        document.body.style.setProperty("--bgColor", "#ececec")
        document.body.style.setProperty("--boxBgColor", "#fff")
        document.body.style.setProperty("--boxBorder", "#ccc")
        document.body.style.setProperty("--color", "#383737")
    }
}
</script>

  
<style scoped>
.ant-layout {
    width: 100vw;
    height: 100vh;
    background: var(--bgColor);
    color: var(--color);
}

.ant-layout-header {
    display: block;
    margin-bottom: 20px;
    box-shadow: 1px 5px 5px var(--boxBorder);
    background-color: var(--boxBgColor);
}

.logoImg {
    width: 62px;
    height: 62px;
    background-color: #fff;
    border-radius: 50%;
}


.ant-switch {
    background-color: #ccc;
}

:global(aside) {
    flex: 0 0 230px !important;
    max-width: 230px !important;
    min-width: 230px !important;
    width: 230px !important;
}


.ant-layout-sider {
    min-width: 10%;
    background-color: var(--boxBgColor);
    box-shadow: 3px -5px 10px var(--boxBorder);
    border-radius: 0 10px 0 0;
}




.ant-layout-content {
    margin-left: 20px;
    background-color: var(--boxBgColor);
    box-shadow: -3px -5px 10px var(--boxBorder);
    border-radius: 10px 0 0 0;
    padding: 20px;
}
</style>