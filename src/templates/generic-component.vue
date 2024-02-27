<template>
    <div>test
        <TopBarNavigationComponent></TopBarNavigationComponent>
        <slot></slot>
        <BottomBarNavigationComponent></BottomBarNavigationComponent>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TopBarNavigationComponent from '../navigation/top-bar-component.vue';
import BottomBarNavigationComponent from '../navigation/bottom-bar-component.vue';

export default defineComponent({
    components: {
        BottomBarNavigationComponent,
        TopBarNavigationComponent
    },
    data() {
        return {
            msg: "tst"
        }
    }

})
</script>

<style scoped lang="scss"></style>
