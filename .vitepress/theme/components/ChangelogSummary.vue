<script setup lang="ts">
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import changelog from '../changelog.json';
import { formatDate } from '../utils/index';

const lastLog = Object.entries(changelog)[0];
</script>

<template>
    <template v-if="lastLog">
        <h2>Changelog</h2>
        <div class="log">
            <div class="left">
                <VPBadge type="info" :text="lastLog[0]" />
                <small> - {{ formatDate(lastLog[1].date, false) }}</small>
            </div>
            <ul class="right">
                <li v-for="(change, index) in lastLog[1].changes" :key="index" class="change">
                    <Badge :type="change.type" :text="change.label" />&nbsp
                    <span class="text" v-html="change.description"></span>&nbsp
                    <a v-if="change.link" :href="change.link">Scopri di più</a>
                </li>
            </ul>
        </div>
        <div v-if="Object.keys(changelog).length > 1" class="full-changelog">
            <VPButton text="Vedi il changelog completo" theme="alt" href="/changelog" />
        </div>
    </template>
</template>

<style scoped>
h2 {
    text-align: center;
}

.log {
    display: grid;
    gap: 1rem;
}

.VPBadge {
    margin-left: 0;
}

.right {
    display: grid;
    gap: 1rem;
    margin-block: 0;
}

.change {
    list-style-type: none;
}

.text {
    margin-block: 0.25rem;
}

.full-changelog {
    margin-top: 2rem;
    text-align: center;
}

.VPButton {
    text-decoration: none;
}

@media (min-width: 640px) {
    .log {
        grid-template-columns: 200px 1fr;
    }

    .right {
        border-left: 1px solid var(--vp-c-default-3);
    }
}

@media (max-width: 640px) {
    .right {
        padding-left: 0;
    }
}
</style>
