<template>
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed shadow">
            <a class="pure-menu-heading" href="">Your Site</a>

            <ul class="pure-menu-list">
                <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Tour</a></li>
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sign Up</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TopBarNavigationComponent",
    data() {
        return {
            msg: "tst"
        }
    }

})
</script>

<style scoped lang="scss">
.pure-menu-horizontal {
    opacity: .95;
}

.shadow {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
