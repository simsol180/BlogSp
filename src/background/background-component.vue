<template>
    <div :class="['splash-container', { hide: image.src.large2x == '' }]">
        <div :style="{
            'background-image': 'url(' + image.src.large2x + ')',
            'top': backgroundOffset.top + 'px'
        }" class="image">&nbsp;</div>
        <span class="credit">
            <a :href="image.url">{{ name }}</a><br />
            By <a :href="image.photographer_url">{{ image.photographer }}</a>
            through <a href="https://www.pexels.com">Pexels</a> </span>
        <slot style="z-index:1;position:relative;top:0px;"></slot>

    </div>
</template>
<script lang="ts" setup>
import { computed, ref, reactive } from 'vue';
import pexelsService from "./background-client-service";
import { PexelsImage } from "./PexelsImage";
import { useOnScrollListener } from "./background-scroll-composition"


const image = reactive(new PexelsImage());
pexelsService.getBackground().then(function (pexelsImage: Error | PexelsImage) {
    if (pexelsImage instanceof PexelsImage) {
        Object.assign(image, pexelsImage);
    }
});

let name = computed((): string => {
    return image.alt == "" ? "No Name Given" : image.alt;
})

let backgroundOffset = useOnScrollListener();

</script>

<style lang="scss" scoped>
.credit {
    position: absolute;
    color: #c5c5c5;
    bottom: 2em;
    right: 2em;
    z-index: 2;
    text-align: right;
    opacity: .6;
    transition: opacity .5s;
}

.credit:hover {
    opacity: 1;
}

.credit a,
.credit a:visited,
.credit a:active {
    color: white;
}

.splash-container {
    transition: opacity .5s;
    opacity: 1;
}

.splash-container.hide {
    opacity: 0;
}

.image {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    left: 0px;
    filter: grayscale(100%);
    width: 100%;
    height: 140%;
    opacity: .2;
}
</style>