import changelog from '../changelog.json';

export type Log = {
    date: string;
    changes: Change[];
};

export type Change = {
    type: 'tip' | 'warning' | 'danger';
    label: string;
    description: string;
    link?: string;
};

export function getLogDate(version: string) {
    const log = changelog[version] as Log;

    if (log) {
        return formatDate(log.date, true);
    }

    return '';
}

export function formatDate(date: string, fullMouth: boolean) {
    const formatter = new Intl.DateTimeFormat('it-IT', {
        day: '2-digit',
        month: fullMouth ? 'long' : 'short',
        year: 'numeric',
    });

    return formatter.format(new Date(date));
}

export function getFeatures(changes?: Change[]) {
    return changes?.filter((change) => change.type === 'tip');
}

export function getImprovements(changes?: Change[]) {
    return changes?.filter((change) => change.type === 'warning');
}

export function getBugfixes(changes?: Change[]) {
    return changes?.filter((change) => change.type === 'danger');
}
