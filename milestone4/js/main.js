'use strict';

const { createApp } = Vue;

const myApp = createApp({
  data() {
    return {
      contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
      ],
      user: {
        name: 'Sofia',
        avatar: './img/avatar_io.jpg'
      },
      currentChat: 0,
      textUser: null,
      textSearch: null
    }
  },
  methods: {
    // determino se il messaggio è inviato o ricevuto
    isSent(contact) {
        if (contact.status === 'sent') {
            return 'sent';
        }
        return '';
    },
    // cambio la variabile utente attivo 
    activeChat(index) {
        this.currentChat = index;
        this.textUser = '';
    },
    // evidenzio il contatto attivo aggiungendo un filtro css tramite la classe active
    isActive(index) {
        if (this.currentChat === index) {
            return 'active';
        }
        return '';
    },
    // creo oggetto messaggio generico
    newMessage(text, textStatus) {
        return {
            message: text,
            status: textStatus
        };
    },
    // risposta automatica all invio del messaggio
    bot() {
        this.contacts[this.currentChat].messages.push(this.newMessage('ok','received'));
    },
    // logica invio messaggi e risposta automatica
    msgLogic(textUser) {
        if (textUser.trim().length < 1) {
            this.textUser = '';
            return;
        }
        this.contacts[this.currentChat].messages.push(this.newMessage(textUser,'sent'));
        // se avessi definito bot in questo contesto e poi l'avessi richiamta sotto setTimeout(bot, 1000) bot sarebbe dovuta essere una arrow function per prendere il this come oggetto e non la window
        setTimeout(this.bot, 1000);
        this.textUser = '';
    },
    // ricerca contatti
    searchContact() {
        this.contacts.forEach(contact => {
            if (!(contact.name.toLowerCase().includes(this.textSearch.toLowerCase()))) {
                contact.visible = false;
            } else {
                contact.visible = true;
            }
        });
    }
  },

});

myApp.mount('#app');