// BOOLZAPP - A (NOT VERY) INNOVATIVE MESSAGING PLATFORM

const app = new Vue({
    el: "#root",
    data: {
        item: 0,
        message: "",
        search: "",
        prova: true,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
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
                avatar: '_2',
                visible: true,
                messages: [{
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
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
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
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
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
        ]
    },
    methods: {
        cambiaChat(index) {
            this.item = index;
        },

        getData() {
            let dateTime = dayjs().format('DD/MM/YYYY HH:mm:ss')
            return dateTime;
        },

        invia() {

            let dataGiorno = this.getData();
            

            if (this.message != "") {
                this.contacts[this.item].messages.push({
                    date: dataGiorno,
                    message: this.message,
                    status: 'sent'
                })
                
                setTimeout (() => {
                    dataGiorno = this.getData();
                    (this.contacts[this.item].messages.push({
                        date: dataGiorno,
                        message: "It's okay!",
                        status: 'received'
                    }))
                }, 5000);
            
            }
                this.message = ""
        },
        
        cancella(index) {

          this.contacts[this.item].messages.splice(index, 1) 
           

        }
    }
})

/* if (this.contacts[this.item].name == this.search) { 
        mostrami quel contact nel v-for
} */

// visible true sono tutti 
