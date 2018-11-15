// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova


//creo la lista dei miei cognomi
var lista = ['Baldi ', 'Papagni ', 'Forgheri ', 'Boolean '];
console.log(lista);
//chiedo all'utente il suo cognome
var cognome_utente = 'Careers';
// var cognome_utente = prompt('Scrivi il tuo cognome');
//metto il cognome dell'utente dentro la mia lista
lista.push(cognome_utente);
console.log(lista);
//metto la lista col nuovo cognome in ordine alfabetico
lista.sort();
console.log(lista);
//stampo la lista
document.getElementById('lista_alfabetica').innerHTML = lista;
//trovo a che posizione della lista il nuovo utente si trova
// for(i = 0; i < lista.length; i++);
var cognome_trovato = false;
var contatore = 0;
while (!cognome_trovato && contatore < lista.length) {
  if (lista[contatore] == cognome_utente) {
    cognome_trovato = true;
  }
  contatore++;
}
console.log(cognome_trovato);
