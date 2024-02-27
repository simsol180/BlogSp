<template>
    <div class="footer l-box is-center">
        View the source of this layout to learn more. Made with love by the Pure Team.
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BottomBarNavigationComponent",
    data() {
        return {
            msg: "tst"
        }
    }

})
</script>

<style scoped lang="scss">
.footer {
    opacity: .95;
}
</style>
