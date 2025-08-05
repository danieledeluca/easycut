# EasyCut

Software gratuito per l'ottimizzazione del taglio lamiere e barre.

## Steps per apportare modifiche sul sito

### Verificare che il branch `origin/main` sia aggiornato con il branch `upstream/main`

Aggiornamento remote `upstream` (progetto originale)

```bash
git fetch upstream
```

Spostamento nel branch `main`

```bash
git checkout main
```

Aggiornamento branch locale `main`

```bash
git merge upstream/main
```

### Creazione di un branch per la modifica/sviluppo

Se non esistono altri branch oltre a `main`, bisogna crearne uno

```bash
git checkout -b [nome del branch]
```

Se esistono si possono usare quelli.

1. Verifica dei branch esistenti

   ```bash
   git branch
   ```

2. Spostamento sul branch

   ```bash
   git checkout [nome del branch]
   ```

3. Verifica delle modifiche esistenti

   ```bash
   git status
   ```

4. Eliminazione delle modifiche se presenti (opzionale)

   ```bash
   git checkout -- .
   ```

5. Aggiornamento del branch

   ```bash
   git rebase origin/main
   ```

6. Applicazione delle modifiche
7. Push delle modifiche

   Aggiunta dei file che si vogliono rilasciare

   ```bash
   git add [percorso del file modificato/aggiunto]
   ```

   Aggiunta di un messaggio che descrive le modifiche fatte

   ```bash
   git commit -m "[messaggio]"
   ```

   Rilascio delle modifiche su GitHub

   ```bash
   git push origin/[nome del branch]
   ```

   Se il branch è nuovo è necessari lanciare questo comando (viene suggerito dal terminale)

   ```bash
   git push --set-upstream origin [nomo del branch]
   ```

### Creazione Pull requests

Una volta pushato il branch, bisogna creare una PR (Pull Requests).

Nella pagina della creazione di una nuova [Pull requests](https://github.com/danieledeluca/easycut/compare), cliccare sul link "**compare across forks**".

Dove c'è scritto "**head repository: ...**" scegliere la propria repository.

Sul pulsante "**compare: ...**" scegliere il branch contente le modifiche (non `main`).

Cliccare sul pulsante "Create pull request" una volta confermate le modifiche che si vogliono apportare.

A questo punto bisogna solo aspettare che il proprietario della repository originale accetti la PR.

## Modificare file .md (Markdown)

Per modificare i file della documentazione è necessario usare la sintassi [Markdown](https://www.markdownguide.org/basic-syntax/).

## Modificare il Changelog

Per modificare il changelog è necessario fare due passaggi:

### Modificare il `changelog.json`

Il file `changelog.json` si trova in `.vitepress/theme/changelog.json`. In questo file bisogna aggiungere una nuova chiave che corrisponde alla versione del software e alcuni parametri riportati di seguito.

```json
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
    }
}
```

### Modificare il `changelog.md`

Dopo aver aggiunto la versione nel `changelog.json` bisogna aggiungere la versione della pagina che contiene tutte le versioni rilasciare `changelog.md`.

Per aggiungere la versione basta incollare le seguenti righe e inserire la versione desiderata.

```md
<div class="changelog-title-wrapper">

## [versione]

<small>{{ getLogDate('[versione]') }}</small>

</div>

<LogChanges version="[versione]" />
```
