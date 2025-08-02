---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: EasyCut
  text: Software gratuito per l'ottimizzazione del taglio lamiere e barre
  tagline: Riduci sprechi e migliora l'efficienza con un software nesting preciso, gratuito e basato su AutoCAD
  actions:
    - theme: brand
      text: Download gratuito
      link: /EasyCutDownload 3.3.3 2022.12.29.7z
      target: _blank
    - theme: alt
      text: Guida completa
      link: /guida/introduzione/benvenuti.md
  image:
    src: /logo.png
    alt: EasyCut

features:
  - icon: 🪚
    title: Ottimizzazione del taglio
    details: Riduce gli sprechi di materiale grazie a un avanzato algoritmo di nesting per il taglio lamiere automatico e preciso.
    link: /guida/introduzione/benvenuti#🪚-ottimizzazione-del-taglio
  - icon: 📐
    title: Compatibilità con AutoCAD
    details: Crea e modifica file DWG nativi integrandosi perfettamente con AutoCAD, ideale per il taglio industriale.
    link: /guida/introduzione/benvenuti#📐-compatibilita-con-autocad
  - icon: 🧩
    title: Gestione automatica dei contorni
    details: Rileva automaticamente contorni e sagome per una lavorazione più efficiente e senza errori.
    link: /guida/introduzione/benvenuti#🧩-gestione-automatica-dei-contorni
  - icon: 🖱️
    title: Interfaccia semplice e intuitiva
    details: Facile da usare anche senza esperienza CAD, velocizza le operazioni di nesting e taglio.
    link: /guida/introduzione/benvenuti#🖱️-interfaccia-semplice-e-intuitiva
---

<script setup lang="ts">
  import ChangelogSummary from '.vitepress/theme/components/ChangelogSummary.vue';
</script>

<ChangelogSummary />
