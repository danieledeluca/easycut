# Forma

Definisce i contorni di taglio (Shape) e lamiere (Sheet).<br />
Il colore del contorno interno, esterno e fori sono definiti nel menu [Setup Contorni](/guida/menu-generale/setup/menu-setup/setup-contorni).<br />
Il colore delle lamiere viene definito dal programma in funzione dello spessore.

![Forma](/public/contorno/forma.png)

## Forma contorno (Shape)

Questa procedura trasforma un contorno disegnato dall'utente in una forma gestita dal programma.

La forma deve avere le seguenti proprietà:

1. Contorno esterno di forma irregolare in entità polilinea chiusa
2. Contorno esterno di forma circolare in entità cerchio
3. Contorni interni di forma circolare in entità cerchio
4. Contorni interni di forma irregolare in entità polilinea chiuse

La procedura eseguirà i controlli di sovrapposizioni spigoli e continuità di vertici.

<video controls>
    <source src="/public/contorno/forma-contorno.mp4" type="video/mp4">
</video>

## Forma lamiere (Sheet)

Questa procedura trasforma un contorno disegnato dall'utente in una lamiera gestita dal programma.

Il contorno della lamiera deve avere le seguenti proprietà:

1. Contorno esterno in entità polilinea chiusa
2. <u>La lamiere non può avere contorni interni o forature</u>

La procedura eseguirà i controlli di sovrapposizioni spigoli e continuità di vertici.

<video controls>
    <source src="/public/contorno/forma-lamiere.mp4" type="video/mp4">
</video>
