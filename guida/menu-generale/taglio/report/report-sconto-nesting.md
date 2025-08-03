# Report sconto nesting

Viene generato il report del nesting eseguito.

![Report sconto nesting](/taglio/report/report-sconto-nesting.png)

La procedura verifica se i contorni selezionati sono stati inseriti nelle lamiere del nesting.<br />
Ad ogni nesting vengono generati i seguenti file di input.

| Tipo di nesting    | File input contorni (default) | File input lamiere (default) |
| ------------------ | ----------------------------- | ---------------------------- |
| Nesting Expert     | StdShapeExpert.shp            | StdSheetExpert.sht           |
| Nesting Rettangolo | StdShapeSample.shp            | StdSheetSample.sht           |

Selezionati i file di riferimento la procedura verifica se i contorni e lamiere siano effettivamente presenti nel disegno (colonna **Status**).

![Utilizzo lamiera](/taglio/report/sconto-nesting.png)

## Report sconto nesting (esempio nesting completo)

<video controls>
    <source src="/taglio/report/report-sconto-nesting-completo.mp4" type="video/mp4">
</video>

## Report sconto nesting (esempio nesting parziale)

<video controls>
    <source src="/taglio/report/report-sconto-nesting-parziale.mp4" type="video/mp4">
</video>
