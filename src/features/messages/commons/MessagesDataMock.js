const messagesFakeAction = {
  payload: {
    type: 'public',
  },
};

const messageDeleteFakeAction = {
  payload: {
    idMessage: '87654321',
  },
};

const messageAddFakeAction = {
  payload: {
    messageType: 'public',
    messageText: '23 ème édition du rallye Coeur de France, youpi !',
    messageSender: 'seancarr@hotmail.fr',
    messageReceiver: 'seancarr@hotmail.fr',
  },
};

const messagesFakeResponse = {
  data: [
    {
      idMessage: '87654321',
      messageType: 'public',
      messageDate: '08/10/2020',
      messageText: '23 ème édition du rallye Coeur de France, youpi !',
      messageSender: {
        userMail: 'seancarr@hotmail.fr',
        userFirstName: 'Sean',
        userLastName: 'Carr',
      },
      messageReceiver: null,
    }, {
      idMessage: '987654321',
      messageType: 'public',
      messageDate: '08/10/2020',
      messageText: 'Météo semaine prochaine : comme un avant-goût d\'hiver, le vent de Nord maintiendra les températures à un niveau inférieur de 5°C aux normales de saison, brrrrrr, préparez vos couettes :)))',
      messageSender: {
        userMail: 'isabellehoward@hotmail.fr',
        userFirstName: 'Isabelle',
        userLastName: 'Howard',
      },
      messageReceiver: null,
    },
  ],
};

const currentUser = {
  userToken: 'WwxxsQQSOPDHDG123g',
  userFirstName: 'Jean',
  userLastName: 'Dupont',
  userAddresse: '22 Avenue Victore Hugo, 94120, Fontenay Sous Bois',
  userPhone: '96222354145',
};

const userFriends = [
  {
    userMail: 'mellalaurent@hotmail.fr',
    userFirstName: 'Mella',
    userLastName: 'Laurent',
  },
  {
    userMail: 'isabellehoward@hotmail.fr',
    userFirstName: 'Isabelle',
    userLastName: 'Howard',
  },
  {
    userMail: 'seancarr@hotmail.fr',
    userFirstName: 'Sean',
    userLastName: 'Carr',
  },
];

const MessagesDataMock = {
  messagesFakeResponse,
  messageDeleteFakeAction,
  messagesFakeAction,
  messageAddFakeAction,
  currentUser,
  userFriends,
};

export default MessagesDataMock;
