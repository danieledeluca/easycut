<script setup lang="ts">
import mediumZoom from 'medium-zoom';
import { useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';

const { Layout } = DefaultTheme;
const router = useRouter();

function setupMediumZoom() {
    mediumZoom('[data-zoomable]', {
        background: 'color-mix(in srgb, var(--vp-c-bg) 80%,transparent)',
    });
}

onMounted(setupMediumZoom);

router.onAfterRouteChange = setupMediumZoom;
</script>

<template>
    <Layout />
</template>
