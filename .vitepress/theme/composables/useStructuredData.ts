import { onMounted } from 'vue';
import structuredDataList from '../structuredDataList.json';

export function useStructuredData(structuredData: keyof typeof structuredDataList) {
    onMounted(() => {
        const structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.textContent = JSON.stringify(structuredDataList[structuredData], null, 2);

        document.head.append(structuredDataScript);
    });
}
