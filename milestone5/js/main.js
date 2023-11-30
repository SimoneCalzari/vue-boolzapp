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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false
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
      textSearch: null,
      longWord: false
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
            status: textStatus,
            chevron: false,
            chevronMenu: false
        };
    },
    // risposta automatica all invio del messaggio
    bot() {
        this.contacts[this.currentChat].messages.push(this.newMessage('ok','received'));
    },
    // logica invio messaggi e risposta automatica
    msgLogic(textUser) {
        // evitare di mandare messaggi vuoti
        if (textUser.trim().length < 1) {
            this.textUser = '';
            return;
        }
        // pseudo controllo se ho una parola molto lunga per evitare che mi spacchi il div del messaggio
        this.longWord = false;
        const arrayWords = textUser.split(' ');
        arrayWords.forEach(element => {
            if (element.length > 15) {
                this.longWord = true;
            }
        });
        // pusho messaggi
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
    },
    // switch visibilità toogle
    chevToogle(element) {
        element.chevron = !element.chevron;
    },
    // switch visibilita chevron menu
    chevMenu(element) {
        element.chevronMenu = !element.chevronMenu;
    },
    // delete message
    delMsg(index) {
        this.contacts[this.currentChat].messages.splice(index,1);
    },
  },

});

myApp.mount('#app');