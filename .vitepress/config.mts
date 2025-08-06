import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress';
import lightbox from 'vitepress-plugin-lightbox';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'EasyCut',
    description:
        "Software gratuito per l'ottimizzazione del taglio lamiere, basato su AutoCAD. Facile da usare, preciso ed efficiente.",
    cleanUrls: true,
    metaChunk: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        // Facebook Meta Tags
        ['meta', { property: 'og:site_name', content: 'EasyCut' }],
        ['meta', { property: 'og:url', content: 'https://www.easycutnesting.it/' }],
        ['meta', { property: 'og:type', content: 'website' }],
        [
            'meta',
            {
                property: 'og:description',
                content:
                    "Software gratuito per l'ottimizzazione del taglio lamiere, basato su AutoCAD. Facile da usare, preciso ed efficiente.",
            },
        ],
        ['meta', { property: 'og:image', content: 'https://www.easycutnesting.it/easycut-og.jpg' }],
        // Twitter Meta Tags
        ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'twitter:domain', content: 'easycutnesting.it' }],
        ['meta', { property: 'twitter:url', content: 'https://www.easycutnesting.it/' }],
        [
            'meta',
            {
                property: 'twitter:description',
                content:
                    "Software gratuito per l'ottimizzazione del taglio lamiere, basato su AutoCAD. Facile da usare, preciso ed efficiente.",
            },
        ],
        ['meta', { property: 'twitter:image', content: 'https://www.easycutnesting.it/easycut-og.jpg' }],
        // Google Tag Manager
        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTK25LR2');`,
        ],
    ],
    sitemap: {
        hostname: 'https://www.easycutnesting.it/',
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: nav(),
        footer: {
            message: 'Contattami: <a href="mailto:info@easycutnesting.it">info@easycutnesting.it</a>',
            copyright: `© ${new Date().getFullYear()} - EasyCut | <a href="/cookie-policy">Cookie Policy</a> - <a href="/privacy-policy">Privacy Policy</a> `,
        },
        sidebar: sidebar(),
        outline: {
            label: 'In questa pagina',
            level: [2, 4],
        },
        search: {
            provider: 'local',
        },
        docFooter: {
            prev: 'Pagina precedente',
            next: 'Pagina successiva',
        },
        darkModeSwitchLabel: 'Aspetto',
        returnToTopLabel: 'Torna su',
    },
    transformPageData: (pageData, ctx) => {
        const title = `${pageData.title || ctx.siteConfig.site.title} | ${pageData.description || ctx.siteConfig.site.description}`;

        ((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
            ['meta', { property: 'og:title', content: title }],
            ['meta', { property: 'twitter:title', content: title }],
        );
    },
    markdown: {
        config: (md) => {
            md.use(lightbox);
        },
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Guida', link: '/guida/introduzione/cose-easycut', activeMatch: '/guida/' },
        { text: 'Changelog', link: '/changelog' },
    ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduzione',
            items: sidebarIntroduzione(),
        },
        {
            text: 'Menu generale',
            items: sidebarMenuGenerale(),
        },
    ];
}

function sidebarIntroduzione(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Cos'è EasyCut?",
            link: '/guida/introduzione/cose-easycut',
        },
        {
            text: 'Per iniziare',
            link: '/guida/introduzione/per-iniziare',
        },
        {
            text: 'Requisiti di sistema',
            link: '/guida/introduzione/requisiti-di-sistema',
        },
        {
            text: 'Licenza',
            link: '/guida/introduzione/licenza',
        },
        {
            text: 'Ringraziamenti',
            link: '/guida/introduzione/ringraziamenti',
        },
    ];
}

function sidebarMenuGenerale(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Setup',
            collapsed: true,
            link: '/guida/menu-generale/setup',
            items: sidebarSetup(),
        },
        {
            text: 'Import Export',
            collapsed: true,
            link: '/guida/menu-generale/import-export',
            items: sidebarImportExport(),
        },
        {
            text: 'Cerca',
            collapsed: true,
            link: '/guida/menu-generale/cerca',
            items: sidebarCerca(),
        },
        {
            text: 'Contorno',
            collapsed: true,
            link: '/guida/menu-generale/contorno',
            items: sidebarContorno(),
        },
        {
            text: 'Attacchi',
            collapsed: true,
            link: '/guida/menu-generale/attacchi',
            items: sidebarAttacchi(),
        },
        {
            text: 'Utensili',
            collapsed: true,
            link: '/guida/menu-generale/utensili',
            items: sidebarUtensili(),
        },
        {
            text: 'Taglio',
            collapsed: true,
            link: '/guida/menu-generale/taglio',
            items: sidebarTaglio(),
        },
    ];
}

function sidebarSetup(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Menu Setup',
            collapsed: true,
            link: '/guida/menu-generale/setup/menu-setup',
            items: sidebarMenuSetup(),
        },
        {
            text: 'Visualizza Variabili',
            collapsed: true,
            link: '/guida/menu-generale/setup/visualizza-variabili',
            items: sidebarVisualizzaVariabili(),
        },
        {
            text: 'Carica Variabili Default',
            collapsed: true,
            link: '/guida/menu-generale/setup/carica-variabili-default',
        },
    ];
}

function sidebarMenuSetup(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Setup Attacchi',
            link: '/guida/menu-generale/setup/menu-setup/setup-attacchi',
        },
        {
            text: 'Setup Contorni',
            link: '/guida/menu-generale/setup/menu-setup/setup-contorni',
        },
        {
            text: 'Setup Velocità',
            link: '/guida/menu-generale/setup/menu-setup/setup-velocita',
        },
        {
            text: 'Setup Escludi Contorni',
            link: '/guida/menu-generale/setup/menu-setup/setup-escludi-contorni',
        },
        {
            text: 'Setup Raggruppamenti',
            link: '/guida/menu-generale/setup/menu-setup/setup-raggruppamenti',
        },
        {
            text: 'Setup Sequenza e Simulazione',
            link: '/guida/menu-generale/setup/menu-setup/setup-sequenza-e-simulazione',
        },
        {
            text: 'Setup Archivio',
            link: '/guida/menu-generale/setup/menu-setup/setup-archivio',
        },
        {
            text: 'Setup Filtri',
            link: '/guida/menu-generale/setup/menu-setup/setup-filtri',
        },
        {
            text: 'Setup Testo',
            link: '/guida/menu-generale/setup/menu-setup/setup-testo',
        },
        {
            text: 'Setup Browser',
            link: '/guida/menu-generale/setup/menu-setup/setup-browser',
        },
        {
            text: 'Setup Immagini HTML',
            link: '/guida/menu-generale/setup/menu-setup/setup-immagini-html',
        },
        {
            text: 'Setup Archivio HTML',
            link: '/guida/menu-generale/setup/menu-setup/setup-archivio-html',
        },
        {
            text: 'Setup Codice a Barre',
            link: '/guida/menu-generale/setup/menu-setup/setup-codice-a-barre',
        },
        {
            text: 'Setup DymStyle',
            link: '/guida/menu-generale/setup/menu-setup/setup-dymstyle',
        },
        {
            text: 'Setup Leader',
            link: '/guida/menu-generale/setup/menu-setup/setup-leader',
        },
    ];
}

function sidebarVisualizzaVariabili(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Lista variabili',
            link: '/guida/menu-generale/setup/visualizza-variabili/lista-variabili',
        },
    ];
}

function sidebarImportExport(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Importa Dstv - Cam',
            link: '/guida/menu-generale/import-export/importa-dstv-cam',
        },
        {
            text: 'Importa Xls - Csv',
            link: '/guida/menu-generale/import-export/importa-xls-csv',
        },
        {
            text: 'Importa Dxf e aggiorna cartiglio',
            link: '/guida/menu-generale/import-export/importa-dxf-e-aggiorna-cartiglio',
        },
        {
            text: 'Esporta contorno SqLite',
            link: '/guida/menu-generale/import-export/esporta-contorno-sqlite',
        },
        {
            text: 'Esporta lamiere SqLite',
            link: '/guida/menu-generale/import-export/esporta-lamiere-sqlite',
        },
        {
            text: 'Importa contorno SqLite',
            link: '/guida/menu-generale/import-export/importa-contorno-sqlite',
        },
        {
            text: 'Importa lamiera SqLite',
            link: '/guida/menu-generale/import-export/importa-lamiera-sqlite',
        },
    ];
}

function sidebarCerca(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Cerca Pezzi su Lamiere',
            link: '/guida/menu-generale/cerca/cerca-prezzi-su-lamiere',
        },
        {
            text: 'Cerca Pezzi su Archivio',
            link: '/guida/menu-generale/cerca/cerca-prezzi-su-archivio',
        },
    ];
}

function sidebarContorno(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Forma',
            link: '/guida/menu-generale/contorno/forma',
        },
        {
            text: 'Inserisci lamiera',
            link: '/guida/menu-generale/contorno/inserisci-lamiera',
        },
        {
            text: 'Inserisci stock lamiere',
            link: '/guida/menu-generale/contorno/inserisci-stock-lamiere',
        },
        {
            text: 'Info dinamico',
            link: '/guida/menu-generale/contorno/info-dinamico',
        },
    ];
}

function sidebarAttacchi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Attacco manuale',
            link: '/guida/menu-generale/attacchi/attacco-manuale',
        },
        {
            text: 'Attacco automatico',
            link: '/guida/menu-generale/attacchi/attacco-automatico',
        },
        {
            text: 'Attacco lamiera',
            link: '/guida/menu-generale/attacchi/attacco-lamiera',
        },
        {
            text: 'Elimina attacco',
            link: '/guida/menu-generale/attacchi/elimina-attacco',
        },
        {
            text: 'Micro Connessione',
            link: '/guida/menu-generale/attacchi/micro-connessione',
        },
        {
            text: 'Elimina Micro Connessione',
            link: '/guida/menu-generale/attacchi/elimina-micro-connessione',
        },
    ];
}

function sidebarUtensili(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Inserisci Contorno',
            link: '/guida/menu-generale/utensili/inserisci-contorno',
        },
        {
            text: 'Tetrix',
            link: '/guida/menu-generale/utensili/tetrix',
        },
        {
            text: 'Serie',
            link: '/guida/menu-generale/utensili/serie',
        },
        {
            text: 'Flessione',
            link: '/guida/menu-generale/utensili/flessione',
        },
    ];
}

function sidebarTaglio(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Nesting Expert e importa lamiera',
            link: '/guida/menu-generale/taglio/nesting-expert-e-importa-lamiera',
        },
        {
            text: 'Nesting Rettangolo',
            link: '/guida/menu-generale/taglio/nesting-rettangolo',
        },
        {
            text: 'Gestione lamiera',
            collapsed: true,
            link: '/guida/menu-generale/taglio/gestione-lamiera',
            items: sidebarGestioneLamiera(),
        },
        {
            text: 'Report',
            collapsed: true,
            link: '/guida/menu-generale/taglio/report',
            items: sidebarReport(),
        },
    ];
}

function sidebarGestioneLamiera(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Calcolo disponibilità lamiere',
            link: '/guida/menu-generale/taglio/gestione-lamiera/calcolo-disponibilita-lamiere',
        },
        {
            text: 'Simulazione di taglio',
            link: '/guida/menu-generale/taglio/gestione-lamiera/simulazione-di-taglio',
        },
        {
            text: 'Sfrido lamiera',
            link: '/guida/menu-generale/taglio/gestione-lamiera/sfrido-lamiera',
        },
    ];
}

function sidebarReport(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Report utilizzo lamiera',
            link: '/guida/menu-generale/taglio/report/report-utilizzo-lamiera',
        },
        {
            text: 'Report sconto nesting',
            link: '/guida/menu-generale/taglio/report/report-sconto-nesting',
        },
        {
            text: 'Report sconto lamiera',
            link: '/guida/menu-generale/taglio/report/report-sconto-lamiera',
        },
        {
            text: 'Report sconto pezzi',
            link: '/guida/menu-generale/taglio/report/report-sconto-pezzi',
        },
        {
            text: 'Report lamiera',
            link: '/guida/menu-generale/taglio/report/report-lamiera',
        },
        {
            text: 'Gestione report',
            link: '/guida/menu-generale/taglio/report/gestione-report',
        },
    ];
}
