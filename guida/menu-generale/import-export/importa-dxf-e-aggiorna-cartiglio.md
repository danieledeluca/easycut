# Importa Dxf e aggiorna cartiglio

Importa i file DXF.

![Importa Dxf e aggiorna cartiglio](/public/import-export/importa-dxf-e-aggiorna-cartiglio.png)

## Importa DXF

Questa procedura si prefigge l'import di file in formato DXF.

Le caratteristiche imprescindibili del file sono:

1. Il formato Dxf deve avere informazioni compatibili con la versione AutoCAD utilizzata
2. Deve contenere le caratteristiche di un solo contorno chiuso con dimensioni reali (non in scala)
3. I contorni interni (fori) non devono essere rappresentati da simboli ma da cerchi
4. Deve avere contorni continui, non interrotti

Se sono rispettate queste caratteristiche la procedura inserirà il contorno eseguendo automaticamente le seguenti azioni correttive:

1. Se il contorno risulterà aperto verrà automaticamente chiuso (nel limite del possibile)
2. Se i fori sono dei blocchi (attenzione !! non simboli), verranno convertiti in cerchi
3. Verrà eliminata qualsiasi sovrapposizione di spigoli
4. Verranno eliminate tutte le linee interne che non appartengono contorno (es. riferimento linee di piega) e tutti i contorni interni non chiusi
5. Verranno mantenuti i testi

<video controls>
    <source src="/public/import-export/importa-dxf.mp4" type="video/mp4">
</video>

## Aggiorna cartiglio DXF

Terminato l'import del file Dxf, il contorno verrà inserito in un cartiglio temporaneo con le indicazioni delle azioni correttive eseguite.<br />
Se l'utente riterrà congruo il contorno rappresentato, mediante la procedura di aggiornamento, verrà inserito il cartiglio definitivo.

<video controls>
    <source src="/public/import-export/aggiorna-cartiglio-dxf.mp4" type="video/mp4">
</video>
