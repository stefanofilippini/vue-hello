/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

var app = new Vue({
    el: '#app',

    data: {
      message: 'Hello Vue!',
      image: 'https://picsum.photos/id/237/200/300',
    }
    
  })