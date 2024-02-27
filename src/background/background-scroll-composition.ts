import { reactive, ref, onMounted, onUnmounted } from 'vue';

export function useOnScrollListener() {
    const offset = reactive({ top: 0 });

    function setOffset() {
        const height = (window.scrollY - window.innerHeight) / 7;
        if (height < 0) {
            offset.top = height;
        }
    }
    onMounted(() => { document.addEventListener("scroll", setOffset); });
    onUnmounted(() => { document.removeEventListener("scroll", setOffset); });

    setOffset();

    return offset;
}