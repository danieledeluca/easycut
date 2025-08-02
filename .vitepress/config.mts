import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'EasyCut',
    description:
        "EasyCut è il software gratuito per l'ottimizzazione automatica del taglio delle lamiere. Il suo algoritmo permette un risparmio significativo nei costi di produzione.",
    cleanUrls: true,
    metaChunk: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        ['meta', { property: 'og:site_name', content: 'EasyCut' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://www.easycutnesting.it/' }],
        ['meta', { property: 'og:image', content: 'https://www.easycutnesting.it/easycut-og.jpg' }],
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
            copyright: `© ${new Date().getFullYear()} - EasyCut`,
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

        ((pageData.frontmatter.head ??= []) as HeadConfig[]).push(['meta', { property: 'og:title', content: title }]);
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/' },
        { text: 'Guida', link: '/guida/introduzione/benvenuti.md', activeMatch: '/guida/' },
        { text: 'Changelog', link: '/changelog.md' },
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
            text: 'Benvenuti',
            link: '/guida/introduzione/benvenuti.md',
        },
        {
            text: 'Per iniziare',
            link: '/guida/introduzione/per-iniziare.md',
        },
        {
            text: 'Requisiti di sistema',
            link: '/guida/introduzione/requisiti-di-sistema.md',
        },
        {
            text: 'Licenza',
            link: '/guida/introduzione/licenza.md',
        },
        {
            text: 'Ringraziamenti',
            link: '/guida/introduzione/ringraziamenti.md',
        },
    ];
}

function sidebarMenuGenerale(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Setup',
            collapsed: true,
            link: '/guida/menu-generale/setup.md',
            items: sidebarSetup(),
        },
        {
            text: 'Import Export',
            collapsed: true,
            link: '/guida/menu-generale/import-export.md',
            items: sidebarImportExport(),
        },
        {
            text: 'Cerca',
            collapsed: true,
            link: '/guida/menu-generale/cerca.md',
            items: sidebarCerca(),
        },
        {
            text: 'Contorno',
            collapsed: true,
            link: '/guida/menu-generale/contorno.md',
            items: sidebarContorno(),
        },
        {
            text: 'Attacchi',
            collapsed: true,
            link: '/guida/menu-generale/attacchi.md',
            items: sidebarAttacchi(),
        },
        {
            text: 'Utensili',
            collapsed: true,
            link: '/guida/menu-generale/utensili.md',
            items: sidebarUtensili(),
        },
        {
            text: 'Taglio',
            collapsed: true,
            link: '/guida/menu-generale/taglio.md',
            items: sidebarTaglio(),
        },
    ];
}

function sidebarSetup(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Menu Setup',
            collapsed: true,
            link: '/guida/menu-generale/setup/menu-setup.md',
            items: sidebarMenuSetup(),
        },
        {
            text: 'Visualizza Variabili',
            collapsed: true,
            link: '/guida/menu-generale/setup/visualizza-variabili.md',
            items: sidebarVisualizzaVariabili(),
        },
        {
            text: 'Carica Variabili Default',
            collapsed: true,
            link: '/guida/menu-generale/setup/carica-variabili-default.md',
        },
    ];
}

function sidebarMenuSetup(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Setup Attacchi',
            link: '/guida/menu-generale/setup/menu-setup/setup-attacchi.md',
        },
        {
            text: 'Setup Contorni',
            link: '/guida/menu-generale/setup/menu-setup/setup-contorni.md',
        },
        {
            text: 'Setup Velocità',
            link: '/guida/menu-generale/setup/menu-setup/setup-velocita.md',
        },
        {
            text: 'Setup Escludi Contorni',
            link: '/guida/menu-generale/setup/menu-setup/setup-escludi-contorni.md',
        },
        {
            text: 'Setup Raggruppamenti',
            link: '/guida/menu-generale/setup/menu-setup/setup-raggruppamenti.md',
        },
        {
            text: 'Setup Sequenza e Simulazione',
            link: '/guida/menu-generale/setup/menu-setup/setup-sequenza-e-simulazione.md',
        },
        {
            text: 'Setup Archivio',
            link: '/guida/menu-generale/setup/menu-setup/setup-archivio.md',
        },
        {
            text: 'Setup Filtri',
            link: '/guida/menu-generale/setup/menu-setup/setup-filtri.md',
        },
        {
            text: 'Setup Testo',
            link: '/guida/menu-generale/setup/menu-setup/setup-testo.md',
        },
        {
            text: 'Setup Browser',
            link: '/guida/menu-generale/setup/menu-setup/setup-browser.md',
        },
        {
            text: 'Setup Immagini HTML',
            link: '/guida/menu-generale/setup/menu-setup/setup-immagini-html.md',
        },
        {
            text: 'Setup Archivio HTML',
            link: '/guida/menu-generale/setup/menu-setup/setup-archivio-html.md',
        },
        {
            text: 'Setup Codice a Barre',
            link: '/guida/menu-generale/setup/menu-setup/setup-codice-a-barre.md',
        },
        {
            text: 'Setup DymStyle',
            link: '/guida/menu-generale/setup/menu-setup/setup-dymstyle.md',
        },
        {
            text: 'Setup Leader',
            link: '/guida/menu-generale/setup/menu-setup/setup-leader.md',
        },
    ];
}

function sidebarVisualizzaVariabili(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Lista variabili',
            link: '/guida/menu-generale/setup/visualizza-variabili/lista-variabili.md',
        },
    ];
}

function sidebarImportExport(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Importa Dstv - Cam',
            link: '/guida/menu-generale/import-export/importa-dstv-cam.md',
        },
        {
            text: 'Importa Xls - Csv',
            link: '/guida/menu-generale/import-export/importa-xls-csv.md',
        },
        {
            text: 'Importa Dxf e aggiorna cartiglio',
            link: '/guida/menu-generale/import-export/importa-dxf-e-aggiorna-cartiglio.md',
        },
        {
            text: 'Esporta contorno SqLite',
            link: '/guida/menu-generale/import-export/esporta-contorno-sqlite.md',
        },
        {
            text: 'Esporta lamiere SqLite',
            link: '/guida/menu-generale/import-export/esporta-lamiere-sqlite.md',
        },
        {
            text: 'Importa contorno SqLite',
            link: '/guida/menu-generale/import-export/importa-contorno-sqlite.md',
        },
        {
            text: 'Importa lamiera SqLite',
            link: '/guida/menu-generale/import-export/importa-lamiera-sqlite.md',
        },
    ];
}

function sidebarCerca(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Cerca Pezzi su Lamiere',
            link: '/guida/menu-generale/cerca/cerca-prezzi-su-lamiere.md',
        },
        {
            text: 'Cerca Pezzi su Archivio',
            link: '/guida/menu-generale/cerca/cerca-prezzi-su-archivio.md',
        },
    ];
}

function sidebarContorno(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Forma',
            link: '/guida/menu-generale/contorno/forma.md',
        },
        {
            text: 'Inserisci lamiera',
            link: '/guida/menu-generale/contorno/inserisci-lamiera.md',
        },
        {
            text: 'Inserisci stock lamiere',
            link: '/guida/menu-generale/contorno/inserisci-stock-lamiere.md',
        },
        {
            text: 'Info dinamico',
            link: '/guida/menu-generale/contorno/info-dinamico.md',
        },
    ];
}

function sidebarAttacchi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Attacco manuale',
            link: '/guida/menu-generale/attacchi/attacco-manuale.md',
        },
        {
            text: 'Attacco automatico',
            link: '/guida/menu-generale/attacchi/attacco-automatico.md',
        },
        {
            text: 'Attacco lamiera',
            link: '/guida/menu-generale/attacchi/attacco-lamiera.md',
        },
        {
            text: 'Elimina attacco',
            link: '/guida/menu-generale/attacchi/elimina-attacco.md',
        },
        {
            text: 'Micro Connessione',
            link: '/guida/menu-generale/attacchi/micro-connessione.md',
        },
        {
            text: 'Elimina Micro Connessione',
            link: '/guida/menu-generale/attacchi/elimina-micro-connessione.md',
        },
    ];
}

function sidebarUtensili(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Inserisci Contorno',
            link: '/guida/menu-generale/utensili/inserisci-contorno.md',
        },
        {
            text: 'Tetrix',
            link: '/guida/menu-generale/utensili/tetrix.md',
        },
        {
            text: 'Serie',
            link: '/guida/menu-generale/utensili/serie.md',
        },
        {
            text: 'Flessione',
            link: '/guida/menu-generale/utensili/flessione.md',
        },
    ];
}

function sidebarTaglio(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Nesting Expert e importa lamiera',
            link: '/guida/menu-generale/taglio/nesting-expert-e-importa-lamiera.md',
        },
        {
            text: 'Nesting Rettangolo',
            link: '/guida/menu-generale/taglio/nesting-rettangolo.md',
        },
        {
            text: 'Gestione lamiera',
            collapsed: true,
            link: '/guida/menu-generale/taglio/gestione-lamiera.md',
            items: sidebarGestioneLamiera(),
        },
        {
            text: 'Report',
            collapsed: true,
            link: '/guida/menu-generale/taglio/report.md',
            items: sidebarReport(),
        },
    ];
}

function sidebarGestioneLamiera(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Calcolo disponibilità lamiere',
            link: '/guida/menu-generale/taglio/gestione-lamiera/calcolo-disponibilita-lamiere.md',
        },
        {
            text: 'Simulazione di taglio',
            link: '/guida/menu-generale/taglio/gestione-lamiera/simulazione-di-taglio.md',
        },
        {
            text: 'Sfrido lamiera',
            link: '/guida/menu-generale/taglio/gestione-lamiera/sfrido-lamiera.md',
        },
    ];
}

function sidebarReport(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Report utilizzo lamiera',
            link: '/guida/menu-generale/taglio/report/report-utilizzo-lamiera.md',
        },
        {
            text: 'Report sconto nesting',
            link: '/guida/menu-generale/taglio/report/report-sconto-nesting.md',
        },
        {
            text: 'Report sconto lamiera',
            link: '/guida/menu-generale/taglio/report/report-sconto-lamiera.md',
        },
        {
            text: 'Report sconto pezzi',
            link: '/guida/menu-generale/taglio/report/report-sconto-pezzi.md',
        },
        {
            text: 'Report lamiera',
            link: '/guida/menu-generale/taglio/report/report-lamiera.md',
        },
        {
            text: 'Gestione report',
            link: '/guida/menu-generale/taglio/report/gestione-report.md',
        },
    ];
}
