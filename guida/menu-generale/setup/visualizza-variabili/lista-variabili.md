# Lista variabili

Valori di default.

### versione

| Descrizione      | Variabile          | Valore             |
| ---------------- | ------------------ | ------------------ |
| versione EasyCut | `VersioneEasyCut$` | ver 2.6 2020.06.10 |

### configurazione

| Descrizione         | Variabile                   | Valore                                          |
| ------------------- | --------------------------- | ----------------------------------------------- |
| nome configurazione | `NameConfigurationEasyCut$` | C:\Users\User\AppData\Local\EasyCut\Default.cfg |

### variabili attacchi

| Descrizione                                | Variabile           | Valore |
| ------------------------------------------ | ------------------- | ------ |
| margine accosto contorno                   | `$MargineAccosto`   | 10.0   |
| margine accosto contorno/bordo lamiera Dx  | `$MargineLamieraDx` | 20.0   |
| margine accosto contorno/bordo lamiera Sx  | `$MargineLamieraSx` | 20.0   |
| margine accosto contorno/bordo lamiera Tp  | `$MargineLamieraTp` | 20.0   |
| margine accosto contorno/bordo lamiera Bt  | `$MargineLamieraBt` | 20.0   |
| margine accosto contorno/bordo lamiera irr | `$MargineLamiera`   | 20.0   |
| lunghezza attacco rettilineo in entrata    | `$LgSegEntra`       | 5.0    |
| lunghezza attatto rettilineo in uscita     | `$LgSegEsci`        | 5.0    |
| lunghezza attacco circolare in entrata     | `$LgSegEntra`       | 10.0   |
| lunghezza attacco circolare in uscita      | `$SvArcEsci`        | 10.0   |
| raggio attacco circolare in entrata        | `$RaggioEntra`      | 8.0    |
| raggio attacco circolare in uscita         | `$RaggioEsci`       | 8.0    |
| colore attacco in entrata                  | `$ColorEntra`       | 60     |
| colore attacco in uscita                   | `$ColorEsci`        | 150    |

### variabili contorni

| Descrizione                            | Variabile            | Valore |
| -------------------------------------- | -------------------- | ------ |
| velocità taglio mm / min               | `$SpeedCut`          | 500    |
| colore contorno esterno orario         | `$ColorShapeOra`     | 1      |
| colore contorno esterno antiorario     | `$ColorShapeAntiOra` | 2      |
| colore contorno interno orario         | `$ColorHoleOra`      | 3      |
| colore contorno interno antiorario     | `$ColorHoleAntiOra`  | 4      |
| colore contorno interno circolari      | `$ColorCircle`       | 5      |
| colore contorno interno ellittici      | `$ColorEllipse`      | 6      |
| freccia massima divisione arco/cerchio | `$ArrowArcDivision`  | 1.0    |

### raggruppamenti

| Descrizione                       | Variabile         | Valore  |
| --------------------------------- | ----------------- | ------- |
| raggruppamento lamiera            | `$RgpSheet`       | LAMIERA |
| raggruppamento target lamiera     | `$RgpSheetTarget` | LAM_TRG |
| raggruppamento contorno piatto    | `$RgpShape`       | PIATTO  |
| raggruppamento target piatto      | `$RgpShapeTarget` | SHP_TRG |
| raggruppamento attacco in entrata | `$RgpTiggerOn`    | ENTRA   |
| raggruppamento attacco in uscita  | `$RgpTiggeroff`   | ESCI    |
| raggruppamento simulazione taglio | `$RgpSymula`      | SIMULA  |

### simulazione

| Descrizione           | Variabile      | Valore |
| --------------------- | -------------- | ------ |
| sequenza              | `$Sequence`    | 5      |
| colore simulazione    | `$ColorSymula` | 6      |
| tipo simulazione      | `$TypSymula`   | 1      |
| secondi di intervallo | `$TimeSymula`  | 0.5    |

### folders e files

| Descrizione                    | Variabile               | Valore                                          |
| ------------------------------ | ----------------------- | ----------------------------------------------- |
| percorso Bin                   | `BinPathEasyCut$`       | C:\EasyCutBeta\Bin\                             |
| percorso Gui DCL               | `GuiPathEasyCut$`       | C:\EasyCutBeta\Gui\                             |
| percorso Font                  | `FontPathEasyCut$`      | C:\EasyCutBeta\Font\                            |
| percorso Libreria blocchi      | `LibPathEasyCut$`       | C:\EasyCutBeta\Lib\                             |
| percorso NestPorfessor         | `NestPorfessorEasyCut$` | C:\EasyCutBeta\NestProfessor-Client\            |
| percorso DataBase              | `DbaseEasyCut$`         | C:\EasyCutBeta\Dbase\                           |
| percorso CNC import            | `CncPathEasyCut$`       | C:\EasyCutBeta\ExampleDstv\C711F\               |
| percorso lavoropercorso taglio | `CutPathEasyCut$`       | C:\Users\User\EasyCut\Output\                   |
| percorso info                  | `InfoPathEasyCut$`      | C:\Users\User\EasyCut\Info\                     |
| percorso layout HTML           | `HtmlStorageEasyCut$`   | C:\Users\User\EasyCut\Output\Docs\              |
| percorso Dxf Nesting           | `DxfNestingEasyCut$`    | C:\EasyCutBeta\Cnc\                             |
| archivio script html           | `HtmlScriptEasyCut$`    | http://adlproeng.altervista.org/easycut/script/ |
| archivio lamiere html          | `ECFolderSheet$`        | 01Sheet\                                        |
| archivio contorni html         | `ECFolderShape$`        | 01Shape\                                        |
| archivio view contorni html    | `ECFolderShapePreview$` | 01ShapePreview\                                 |
| archivio report html           | `ECFolderReport$`       | 01Report\                                       |
| nome file lamiere html         | `ECFileSheet$`          | Sheet                                           |
| nome file contorno html        | `ECFileShape$`          | Shape                                           |
| nome file report html          | `ECFileReport$`         | Report                                          |
| nome file tree html            | `ECFileTree$`           | Index                                           |
| percorso setup                 | `SetupPathEasyCut$`     | C:\Users\User\AppData\Local\EasyCut             |
| nome file setup                | `SetupFileEasyCut$`     | Default.cfg                                     |
| blocco info sheet              | `NameBlockSheet$`       | BlockSheet01                                    |
| blocco info shape              | `NameBlockShape$`       | BlockShape_02                                   |
| blocco info shape TMP          | `NameBlockShapeTmp$`    | BlockShapeTmp_01                                |
| file blocco info sheet         | `FileBlockSheet$`       | BlockSheet01.dwg                                |
| file blocco info shape         | `FileBlockShape$`       | BlockShape02.dwg                                |
| file blocco info shape TMP     | `FileBlockShapeTmp$`    | BlockShapeTmp01.dwg                             |
| file blocco logo               | `FileBlockLogo$`        | Logo.dwg                                        |

### filtri

| Descrizione     | Variabile      | Valore                                                                                   |
| --------------- | -------------- | ---------------------------------------------------------------------------------------- |
| filtro contorno | `$FilterList`  | ((-4 . &lt;OR) (0 . LwPolyline) (0 . Circle) (0 . Ellipse) (0 . Polyline) (-4 . OR&gt;)) |
| filtro attacchi | `$TriggerList` | ((-4 . &lt;OR) (0 . Arc) (0 . Line) (-4 . OR&gt;))                                       |

### testi

| Descrizione          | Variabile              | Valore       |
| -------------------- | ---------------------- | ------------ |
| stile testo          | `$StyleEasyCut`        | EasyCutStyle |
| stile codice a barre | `$StyleEasyCutBarCode` | BarCode      |
| altezza testo        | `$HTextEasyCut`        | 40           |
| font default         | `$FontDefaultEasyCut`  | romans.shx   |

### dinamic info

| Descrizione                 | Variabile                  | Valore       |
| --------------------------- | -------------------------- | ------------ |
| layer info dinamico         | `$LayerDinamicInfoEasyCut` | DinfoEasyCut |
| altezza testo info dinamico | `$HTextDinamicInfoEasyCut` | 70           |

### velocita taglio x spessori

| Descrizione        | Variabile        | Valore                                                |
| ------------------ | ---------------- | ----------------------------------------------------- |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 5.0 Velocita [mm/min] -&gt;542.0  |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 8.0 Velocita [mm/min] -&gt;458.0  |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 10.0 Velocita [mm/min] -&gt;425.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 12.0 Velocita [mm/min] -&gt;383.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 15.0 Velocita [mm/min] -&gt;358.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 20.0 Velocita [mm/min] -&gt;308.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 25.0 Velocita [mm/min] -&gt;283.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 30.0 Velocita [mm/min] -&gt;242.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 35.0 Velocita [mm/min] -&gt;225.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 40.0 Velocita [mm/min] -&gt;217.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 50.0 Velocita [mm/min] -&gt;200.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 75.0 Velocita [mm/min] -&gt;167.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;100.0 Velocita [mm/min] -&gt;158.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;125.0 Velocita [mm/min] -&gt;150.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;150.0 Velocita [mm/min] -&gt;133.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;200.0 Velocita [mm/min] -&gt;117.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;250.0 Velocita [mm/min] -&gt;108.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;300.0 Velocita [mm/min] -&gt; 75.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt;400.0 Velocita [mm/min] -&gt; 58.0 |
| Velocita di taglio | `$SpeedCutArray` | Spessore [mm] -&gt; 0.0 Velocita [mm/min] -&gt; 0.0   |

### diametri esclusi dal taglio

| Descrizione                 | Variabile      | Valore                             |
| --------------------------- | -------------- | ---------------------------------- |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 1.0 ÷ 18.0 &gt; |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt;25.0 ÷ 30.0 &gt; |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt;50.0 ÷ 55.0 &gt; |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |
| Diametri esclusi dal taglio | `$CutOffArray` | Diametro [mm] &lt; 0.0 ÷ 0.0 &gt;  |

### taglio contorni interni irregolari

| Descrizione                        | Variabile               | Valore |
| ---------------------------------- | ----------------------- | ------ |
| taglio contorni interni irregolari | `$CutOffIrregularShape` | 0      |

### Codice a Barre

| Descrizione                 | Variabile       | Valore                |
| --------------------------- | --------------- | --------------------- |
| Composizione codice a barre | `$BarCodeArray` | COMMESSA\|FASE\|MARCA |

### lista dati codice a barre

| Descrizione               | Variabile         | Valore                    |
| ------------------------- | ----------------- | ------------------------- |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; ------ &gt;          |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; ID CONTORNO &gt;     |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; COMMESSA &gt;        |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; FASE &gt;            |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; MARCA &gt;           |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; SPESSORE &gt;        |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; LUNGHEZZA &gt;       |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; LARGHEZZA &gt;       |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; PERIMETRO &gt;       |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; MATERIALE &gt;       |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; PESO &gt;            |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; CONTORNO &gt;        |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; PERCORRENZA &gt;     |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; COMPENSAZIONE &gt;   |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; TEMPO TAGLIO &gt;    |
| Lista dati codice a barre | `$LstDataBarCode` | &lt; ULTIMA MODIFICA &gt; |

### Export Html Reports

| Descrizione                    | Variabile               | Valore                                      |
| ------------------------------ | ----------------------- | ------------------------------------------- |
| HTML Ctb di riferimento layout | `$HtmlCtbEasyCut`       | monochrome.ctb                              |
| HTML PC3 di riferimento layout | `$HtmlPlotterEasyCut`   | PublishToWeb JPG.pc3                        |
| HTML dimensione foglio layout  | `$HtmlPaperSizeEasyCut` | UserDefinedRaster (1200.00 x 1600.00Pixels) |

### Lista composizione codice a linee di messaggio

| Descrizione                                 | Variabile               | Valore |
| ------------------------------------------- | ----------------------- | ------ |
| Lunghezza inizio linea controllo meassaggio | `$CharStartLineMessage` | 0.10   |
| Lunghezza fine linea controllo messaggio    | `$CharEndLineMessage`   | 0.20   |
| Carattere 0                                 | `$LengthLineMessage`    | 0.31   |
| Carattere 1                                 | `$LengthLineMessage`    | 0.32   |
| Carattere 2                                 | `$LengthLineMessage`    | 0.33   |
| Carattere 3                                 | `$LengthLineMessage`    | 0.34   |
| Carattere 4                                 | `$LengthLineMessage`    | 0.35   |
| Carattere 5                                 | `$LengthLineMessage`    | 0.36   |
| Carattere 6                                 | `$LengthLineMessage`    | 0.37   |
| Carattere 7                                 | `$LengthLineMessage`    | 0.38   |
| Carattere 8                                 | `$LengthLineMessage`    | 0.39   |
| Carattere 9                                 | `$LengthLineMessage`    | 0.40   |
| Carattere A                                 | `$LengthLineMessage`    | 0.41   |
| Carattere B                                 | `$LengthLineMessage`    | 0.42   |
| Carattere C                                 | `$LengthLineMessage`    | 0.43   |
| Carattere D                                 | `$LengthLineMessage`    | 0.44   |
| Carattere E                                 | `$LengthLineMessage`    | 0.45   |
| Carattere F                                 | `$LengthLineMessage`    | 0.46   |
| Carattere G                                 | `$LengthLineMessage`    | 0.47   |
| Carattere H                                 | `$LengthLineMessage`    | 0.48   |
| Carattere I                                 | `$LengthLineMessage`    | 0.49   |
| Carattere J                                 | `$LengthLineMessage`    | 0.50   |
| Carattere L                                 | `$LengthLineMessage`    | 0.51   |
| Carattere M                                 | `$LengthLineMessage`    | 0.52   |
| Carattere N                                 | `$LengthLineMessage`    | 0.53   |
| Carattere O                                 | `$LengthLineMessage`    | 0.54   |
| Carattere P                                 | `$LengthLineMessage`    | 0.55   |
| Carattere Q                                 | `$LengthLineMessage`    | 0.56   |
| Carattere R                                 | `$LengthLineMessage`    | 0.57   |
| Carattere S                                 | `$LengthLineMessage`    | 0.58   |
| Carattere T                                 | `$LengthLineMessage`    | 0.59   |
| Carattere U                                 | `$LengthLineMessage`    | 0.60   |
| Carattere V                                 | `$LengthLineMessage`    | 0.61   |
| Carattere W                                 | `$LengthLineMessage`    | 0.62   |
| Carattere X                                 | `$LengthLineMessage`    | 0.63   |
| Carattere Y                                 | `$LengthLineMessage`    | 0.64   |
| Carattere Z                                 | `$LengthLineMessage`    | 0.65   |
| Carattere +                                 | `$LengthLineMessage`    | 0.66   |
| Carattere -                                 | `$LengthLineMessage`    | 0.67   |
| Carattere \*                                | `$LengthLineMessage`    | 0.68   |
| Carattere /                                 | `$LengthLineMessage`    | 0.69   |
| Carattere \_                                | `$LengthLineMessage`    | 0.70   |
| Carattere .                                 | `$LengthLineMessage`    | 0.71   |
| Carattere '                                 | `$LengthLineMessage`    | 0.72   |
