# EasyCut

Software gratuito per l'ottimizzazione del taglio lamiere e barre.

## Come modificare le pagine del sito

### Aggiornamento del branch `main`

Verificare che il branch `origin/main` sia aggiornato con il branch `upstream/main`.

1. Aggiornamento remote `upstream` (progetto originale)

   ```bash
   git fetch upstream
   ```

2. Spostamento nel branch `main`

   ```bash
   git checkout main
   ```

3. Aggiornamento branch locale `main`

   ```bash
   git merge upstream/main
   ```

### Creazione di un branch per le modifiche

Verifica dei branch esistenti

```bash
git branch
```

Se non esistono altri branch oltre a `main`, bisogna crearne uno nuovo.

Creazione nuovo branch

```bash
git checkout -b [nome del branch]
```

Se esistono si possono usare quelli.

1. Spostamento sul branch

   ```bash
   git checkout [nome del branch]
   ```

2. Verifica delle modifiche esistenti

   ```bash
   git status
   ```

3. Eliminazione delle modifiche se presenti (opzionale)

   ```bash
   git checkout -- .
   ```

4. Aggiornamento del branch

   ```bash
   git rebase origin/main
   ```

5. Applicazione delle modifiche

### Rilascio del branch

1.  Aggiunta dei file che si vogliono rilasciare

```bash
git add [percorso del file modificato/aggiunto]
```

2.  Aggiunta di un messaggio che descrive le modifiche fatte

```bash
git commit -m "[messaggio]"
```

3.  Rilascio delle modifiche su GitHub

```bash
git push origin/[nome del branch]
```

4.  Se il branch è nuovo è necessario lanciare questo comando (viene suggerito dal terminale)

```bash
git push --set-upstream origin [nomo del branch]
```

### Creazione della pull requests (PR)

Una volta pushato il branch, bisogna creare una pull request.

Nella pagina della creazione di una nuova [pull requests](https://github.com/danieledeluca/easycut/compare), cliccare sul link "**compare across forks**".

Dove c'è scritto "**head repository: ...**" scegliere la propria repository (`AndreaDeLuca65/easycut-docs`).

Sul pulsante "**compare: ...**" scegliere il branch che contente le modifiche (non `main`).

Cliccare sul pulsante "Create pull request" una volta confermate le modifiche che si vogliono apportare.

A questo punto bisogna solo aspettare che il proprietario della repository originale accetti la PR.

## Come modificare i file .md (Markdown)

Per modificare i file della documentazione è necessario usare la sintassi [Markdown](https://www.markdownguide.org/basic-syntax/).

## Come pubblicare una nuova versione del software

Per pubblicare una nuova versione del software bisogna seguire i seguenti passaggi:

1. Aggiungere il file compresso dentro la cartella `public`
2. Aggiornare il `changelog.json` (`.vitepress/theme/changelog.json`)

   Per farlo basta aggiungere queste righe prima dell'ultima versione presente nel file.

   ```jsonc
   {
      "[version del software]": {
         "date": "[data di rilascio]", // Formato accettato dd/mm/yyyy
         "changes": [ // Lista di cambiamenti
            {
               "type": "[tipo di modifica]", // Valori accettati "typ" | "warning" | "danger"
               "label": "[testo della label]", // Valori consigliati "Nuovo" | "Modificato" | "Fixato"
               "description": "[breve descrizione della modifica]",
               "link": "[link a una qualunque pagina della guida]" // Questo parametro è opzionale, il valore deve essere il path al file della guida senza estensione del file (es. /guida/introduzione/cose-easycut)
            },
            {
               ...
            }
         ]
      },
   }
   ```

3. Aggiornare il `changelog.md`

   Per aggiungere la versione basta incollare le seguenti righe prima dell'ultima versione presente nel file e inserire la versione desiderata.

   ```md
   <div class="changelog-title-wrapper">

   ## [versione]

   <small>{{ getLogDate('[versione]') }}</small>

   </div>

   <LogChanges version="[versione]" />
   ```

4. Aggiornare i dati strutturati (`.vitepress/theme/structuredDataList.json`)

   In questo file basta modificare il valore di due parametri `softwareVersion` e `datePublished` (yyyy-mm-dd).
