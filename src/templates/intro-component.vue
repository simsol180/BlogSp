<template>
    <GenericTemplate>
        <BackgroundComponent>
            <div class="splash">
                <h1 class="splash-head">{{ title }}</h1>
                <p class="splash-subhead">
                    {{ subTitle }}
                </p>
                <p>
                    <a class="pure-button pure-button-primary" v-for="link in links" v-bind:key="link.text"
                        :href="link.url">
                        {{ link.text }}
                    </a>
                </p>
            </div>
        </BackgroundComponent>

        <div class="content-wrapper">
            <slot></slot>
        </div>
    </GenericTemplate>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BackgroundComponent from '../background/background-component.vue'
import GenericTemplate from './generic-component.vue';



export default defineComponent({
    name: "IntroTemplate",
    components: {
        GenericTemplate,
        BackgroundComponent

    },
    data() {
        return {
            title: "Big Bold Text",
            subTitle: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.",
            links: [
                {
                    text: "Get Started",
                    url: "http://purecss.io/"
                }
            ]
        }
    }

})
</script>

<style scoped lang="scss"></style>
