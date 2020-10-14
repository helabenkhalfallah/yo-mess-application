const userLoginFakeAction = {
  payload: {
    userEmail: 'jeandupont@gmail.com',
    userPassword: 'XXXX',
  },
};

const userLoginFakeResponse = {
  userToken: 'WwxxsQQSOPDHDG123g',
  userFirstName: 'Jean',
  userLastName: 'Dupont',
  userAddresse: '22 Avenue Victore Hugo, 94120, Fontenay Sous Bois',
  userPhone: '96222354145',
};

const userLoginBadFakeResponse = {
  userFirstName: 'Jean',
  userLastName: 'Dupont',
  userAddresse: '22 Avenue Victore Hugo, 94120, Fontenay Sous Bois',
  userPhone: '96222354145',
};

const UserDataMock = {
  userLoginFakeAction,
  userLoginFakeResponse,
  userLoginBadFakeResponse,
};

export default UserDataMock;
