'use strict';
/*
Zadání
======

1) V HTML vytvoř div s id="app", ve kterém poběží naše aplikace

2) Tady v JS souboru vytvoř novou Vue instanci a napoj ji na element vytvořený v kroku 1 v HTML.

Instance bude v datech obsahovat dvě vlastnosti: cislo1, cislo2.

3) Do HTML kódu přidej dvě textová pole <input> a jeden odstavec <p>.

Cílem aplikace je, aby uživatel mohl do textových polí zadávat čísla, která se mu při jakékoliv změně automaticky sečtou a výsledek se ukáže ve vytvořeném odstavci.

Použij v-model na textových polích a navaž je na data cislo1, cislo2.

Výsledek, který se vypisuje do odstavce, udělej jako "computed property".


BONUS:
======
4) Přidej přepínače (radio buttony) nebo rozbalovací roletku (select), kde půjde vybrat, jakou matematickou operaci chceš provést (sčítání, odčítání, násobení, dělení).

5) Ošetři všechny možné chybové stavy - není zadáno číslo, dělení nulou, apod. Případné chyby vypisuj do výsledku.
*/