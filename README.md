# ESERCIZIO TRENO

## Descrizione

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

**MILESTONE 1:**

- Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

**MILESTONE 2:**

- Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento

- Chiedere all'utente il numero di chilometri che vuole percorrere.
- Chiedere all'utente l'età del passeggero.
- Moltiplicare ( numero chilometri \* 0.21€ )
- Applicare sconto del 20 % **SE** passeggero minorenne
- Applicare sconto del 40 % **SE** passeggero over 65
- Prezzo finale con .toFixed(2) (due numeri dopo la virgola)
- Sostituire i prompt (km , age) con due input
- Aggiungere un bottone che invii le informazioni scritte a schermo
