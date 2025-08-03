# Calcolo disponibilità lamiere

Definisce ed eventualmente calcola la disponibilità delle lamiere necessarie per il nesting.

![Calcolo disponibilità lamiere](/taglio/gestione-lamiera/calcolo-disponibilita-lamiere.png)

## La procedura prevede le seguenti fasi

### Opzione A

Selezione pezzi per il nesting.<br />
Selezione lamiere vuote per il nesting.

**Metodo:**<br />
La procedura calcola la superficie totale dei pezzi selezionati considerando il rettangolo minimo che li contiene e restituisce il messaggio di verifica (Lamiere sufficienti o insufficienti per il nesting).

<video controls>
    <source src="/taglio/gestione-lamiera/calcolo-disponibilita-lamiere-a.mp4" type="video/mp4">
</video>

### Opzione B

Selezione pezzi per il nesting.<br />
Nessuna selezione lamiera.

**Metodo:**<br />
La procedura calcola la superficie totale dei pezzi selezionati considerando il rettangolo minimo che li contiene e restituisce una serie di lamiere.

::: warning N.B.
La procedura verifica la disponibilità in funzione della superficie e non della reale disposizione dei pezzi nella lamiera.<br />
Questa verifica deve essere seguita dal nesting lamiera (Expert o Rettangolo).
:::

<video controls>
    <source src="/taglio/gestione-lamiera/calcolo-disponibilita-lamiere-b.mp4" type="video/mp4">
</video>

## Guida menu "Calcolo utilizzo lamiera"

La procedura guida l'utente alla creazione di uno stock lamiere in funzione della superficie realizzare.

![Calcolo utilizzo lamiere](/taglio/gestione-lamiera/calcolo-utilizzo-lamiere.png)

Il menu si divide in due parti.

### Dati geometrici lamiera

Vengono definiti i parametri per generare la lista delle lamiere in funzione dei seguenti parametri:

#### Minima larghezza lamiera

Viene definito il limite minimo della larghezza per il calcolo della lamiera.

#### Massima larghezza lamiera

Viene definito il limite massimo della larghezza per il calcolo della lamiera.

#### Minima lunghezza lamiera

Viene definita la partenza minima della lunghezza per il calcolo della lamiera.

#### Massima lunghezza lamiera

Viene definita la lunghezza massima per il calcolo della lamiera.

#### Incremento larghezza lamiera

Viene definita lo step di incremento della larghezza per ogni stock della lista lamiera.

---

### Dati superficie di calcolo

Viene definito il valore della superficie per creare lo stock lamiere.

#### Superficie da utilizzare

Viene definita la superficie calcolata dalla selezione dei pezzi.

#### Percentuale da aggiungere alla superficie

Viene definita in forma percentuale da aggiungere la superficie di utilizzo.

#### Superficie di calcolo

Viene visualizzata la superficie sulla quale la procedura calcola lo stock lamiere.
