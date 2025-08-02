# Attacco automatico

Definisce un attacco automatico.<br />
I valori geometrici dell'attacco (colore, lunghezza ecc.) sono definiti nel menu [Setup Attacchi](/guida/menu-generale/setup/menu-setup/setup-attacchi).<br />
Se si vogliono escludere gli attacchi da contorni interni vedi [Setup Escludi Contorni](/guida/menu-generale/setup/menu-setup/setup-escludi-contorni).

![Attacco automatico](/public/attacchi/attacco-automatico.png)

La procedura definisce in maniera automatica il tipo di attacco (rettilineo o tangente) e la sua posizione.<br />
La posizione è determinata dal primo vertice del contorno.<br />
Se lo spigolo del secondo vertice è un arco verrà inserito un raccordo tangente altrimenti sarà rettilineo.

<video controls>
    <source src="/public/attacchi/attacco-automatico.mp4" type="video/mp4">
</video>
