<template>
    <GenericTemplate>
        article component
    </GenericTemplate>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import GenericTemplate from './generic-component.vue';


export default defineComponent({
    components: {
        GenericTemplate
    },
    data() {
        return {
            msg: "tst"
        }
    }

})
</script>

<style scoped lang="scss"></style>
