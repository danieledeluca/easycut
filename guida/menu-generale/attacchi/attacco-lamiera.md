# Attacco lamiera

Definisce gli attacchi dei contorni all'interno di una lamiera.<br />
I valori geometrici dell'attacco (colore, lunghezza ecc.) sono definiti nel menu [Setup Attacchi](/guida/menu-generale/setup/menu-setup/setup-attacchi).<br />
Se si vogliono escludere gli attacchi da contorni interni vedi [Setup Escludi Contorni](/guida/menu-generale/setup/menu-setup/setup-escludi-contorni).

![Attacco lamiera](/attacchi/attacco-lamiera.png)

La procedura ricerca all'interno della lamiere i contorno da tagliare.<br />
Definisce in maniera automatica il tipo di attacco (rettilineo o tangente) e la sua posizione.<br />
La posizione è determinata dal primo vertice del contorno.<br />
Se lo spigolo del secondo vertice è un arco verrà inserito un raccordo tangente altrimenti sarà rettilineo.

<video controls>
    <source src="/attacchi/attacco-lamiera.mp4" type="video/mp4">
</video>
