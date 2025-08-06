# Per iniziare

Assicurati di rispettare i [requisiti di sistema](/guida/introduzione/requisiti-di-sistema.md).

## Installazione di EasyCut

1. Scarica il file ZIP dal sito [EasyCut](/) tramite il pulsante "Download gratuito"
2. Estrai l’archivio ZIP in una cartella sul tuo computer
3. Doppio click sul file **EasyCutDownload [versione].exe** per eseguire l'installazione
4. Al termine dell'installazione si aprirà il Form di verifica delle presenza di AutoCAD, se tutto va a buon fine apparirà la seguente scritta
   > AcadDoc.lsp modificato | EasyCut ver [versione] installato e configurato correttamente

## Caricare EasyCut in AutoCAD

1. Avvia AutoCAD ([versioni compatibili](/guida/introduzione/requisiti-di-sistema.md#versione-autocad-supportato))
2. Vai sulla riga di comando e digita:

   ```nginx
   LOADEC
   ```

   Questo caricherà i file .lsp necessari e avvierà il caricamento del programma. Comparirà una schermata con il logo "EasyCut" e la versione

3. Una volta caricato, digita il comando:

   ```nginx
   EC
   ```

   Questo aprirà l'interfaccia principale del software

4. A questo punto si aprirà il menu principale che include tutte le funzioni: ricerca pezzi, gestione lamiere, attacchi, taglio e altro.

<script setup lang="ts">
  import { useStructuredData } from '../../.vitepress/theme/composables/useStructuredData.ts';

  useStructuredData('HowTo');
</script>

### Caricamento manuale

Questa procedura è necessaria qualora l'utente non disponga di privilegi amministratore o non riesca a modificare il file **AcadDoc.lsp**.

::: warning N.B.
Questa procedura va eseguita una sola volta.
:::

1. Avviare AutoCAD
2. Aprire il menu **Manage > Load Application** (oppure da riga di comando digitare `_appload`)
3. Selezionare il file **C:\Program Files (x86)\EasyCut\Load\ManualLoadEasyCut.lsp**
4. Caricare il file cliccando sul pulsante "Load"
5. Cliccare sul pulsante "Contents..." in **Startup Suite**
6. Cliccare su "Add"
7. Selezionare il file **C:\Program Files (x86)\EasyCut\Load\ManualLoadEasyCut.lsp**
8. Eseguire il comando:

   ```nginx
   LOADEC
   ```
