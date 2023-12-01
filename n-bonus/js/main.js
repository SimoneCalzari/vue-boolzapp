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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
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
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received',
                    chevron: false,
                    chevronMenu: false,
                    longWord: false
                }
            ],
        }
      ],
      user: {
        name: 'Sofia',
        avatar: './img/avatar_io.jpg'
      },
      currentChat: 0,
      textUser: '',
      textSearch: '',
      quotes: ['Fa più rumore un albero che cade di una foresta che cresce.','Tutti pensano a cambiare il mondo, ma nessuno pensa a cambiar se stesso.', 'È meglio tenere la bocca chiusa e lasciare che le persone pensino che sei uno sciocco piuttosto che aprirla e togliere ogni dubbio.', 'Dio è morto, Marx è morto, e anche io non mi sento molto bene.', 'Le follie sono le uniche cose che non si rimpiangono mai.', 'Colui che chiede è stupido per un minuto, colui che non chiede è stupido per tutta la vita.', "Un uomo che osa sprecare anche solo un'ora del suo tempo non ha scoperto il valore della vita.", 'Fa ciò che senti giusto nel tuo cuore, poiché verrai criticato comunque. Sarai dannato se lo fai, dannato se non lo fai.', "Se non ricordi che amore t'abbia mai fatto commettere la più piccola follia, allora non hai amato.", 'Se giudichi le persone, non avrai tempo per amarle.'],
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
    // cambio la variabile utente attivo e ripristino lista contatti
    activeChat(index) {
        this.currentChat = index;
        this.textUser = '';
        this.textSearch = '';
        this.contacts.forEach(element => element.visible = true);
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
            date: this.dateHour(),
            chevron: false,
            chevronMenu: false,
            longWord: false
        };
    },
    // risposta automatica all invio del messaggio
    bot() {
        const newMsg = this.newMessage(this.quotes[Math.floor(Math.random() * this.quotes.length)],'received')
        this.contacts[this.currentChat].messages.push(newMsg);
        // controllo per evitare che il caso di una sola parola lunga e senza spazi spacchi il div della chat
        const arrayWords = newMsg.message.split(' ');
        arrayWords.forEach(strMessage => {
            if (strMessage.length > 15) {
                newMsg.longWord = true;
            } 
        });
    },
    // logica invio messaggi e risposta automatica
    msgLogic(textUser) {
        // evitare di mandare messaggi vuoti
        if (textUser.trim().length < 1) {
            this.textUser = '';
            return;
        }
        // pusho messaggi
        this.contacts[this.currentChat].messages.push(this.newMessage(textUser,'sent'));
        // se avessi definito bot in questo contesto e poi l'avessi richiamta sotto setTimeout(bot, 1000) bot sarebbe dovuta essere una arrow function per prendere il this come oggetto e non la window
        setTimeout(this.bot, 1000);
        this.textUser = '';
        // pseudo controllo se ho una parola molto lunga per evitare che mi spacchi il div del messaggio
        this.contacts[this.currentChat].messages.forEach(element => {
            const arrayWords = element.message.split(' ');
            arrayWords.forEach(strMessage => {
                if (strMessage.length > 15) {
                    element.longWord = true;
                } 
            });
        });
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
    // non le ho fatte tipo toogle ma come funzioni separate on e off perchè veniva fuori un bug sul messaggio successivo a quello che cancellavo
    // chevron visibile
    chevOn(element) {
        element.chevron = true;
    },
    // chevron non visibile
    chevOff(element) {
        element.chevron = false;
    },
    // chevron menu visibile
    chevMenuOn(element) {
        element.chevronMenu = true;
    },
    // chevron menu visibile
    chevMenuOff(element) {
        element.chevronMenu = false;
    },
    // delete message
    delMsg(index) {
        if (this.contacts[this.currentChat].messages.length > 1) {
            this.contacts[this.currentChat].messages.splice(index,1);
            return;
        }
        this.contacts[this.currentChat].messages = [];
    },
    // manipolo la proprieta date dei vari messaggi per estrarre l ora e metterla dove voglio
    getTime(element) {
        const array = element.date.split(' ');
        const ora = array[1].slice(0,5);
        return ora;
    },
    // creo la proprieta date con luxon per i messaggi inviati e ricevuti cosi da poterla passare quando ne ho uno nuovo
    dateHour() {
        const obj = luxon.DateTime.now();
        const day = obj.day;
        const month = obj.month;
        const year = obj.year;
        // luxon da i ore, minuti e secondi senza due cifre fisse, le aggiungo io manualmente
        let hour = obj.hour;
        if (hour.length < 2) {
            hour = '0' + hour;
        }
        let minute = obj.minute;
        if (minute.length < 2) {
            minute = '0' + minute;
        }
        let second = obj.second;
        if (second.length < 2) {
            second = '0' + second;
        }
        const dateHour = day + ':' + month + ':' + year + ' ' + hour + ':' + minute + ':' + second;
        return dateHour;
    }
  },

});

myApp.mount('#app');