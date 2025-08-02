<script setup lang="ts">
import changelog from '../changelog.json';
import { Log, getBugfixes, getFeatures, getImprovements } from '../utils/index';

const { version } = defineProps<{
    version: string;
}>();

const log = changelog[version] as Log;
const features = getFeatures(log?.changes);
const bugfixes = getBugfixes(log?.changes);
const improvements = getImprovements(log?.changes);
</script>

<template>
    <div v-if="bugfixes?.length">
        <h3>🐛 Bug fix</h3>
        <ul>
            <li v-for="bugfix in bugfixes" :key="bugfix.description">
                <span v-html="bugfix.description"></span>&nbsp
                <a v-if="bugfix.link" :href="bugfix.link">Scopri di più</a>
            </li>
        </ul>
    </div>
    <div v-if="features?.length">
        <h3>✨ Novità</h3>
        <ul>
            <li v-for="feature in features" :key="feature.description">
                <span v-html="feature.description"></span>&nbsp
                <a v-if="feature.link" :href="feature.link">Scopri di più</a>
            </li>
        </ul>
    </div>
    <div v-if="improvements?.length">
        <h3>🔧 Miglioramenti</h3>
        <ul>
            <li v-for="improvement in improvements" :key="improvement.description">
                <span v-html="improvement.description"></span>&nbsp
                <a v-if="improvement.link" :href="improvement.link">Scopri di più</a>
            </li>
        </ul>
    </div>
</template>
