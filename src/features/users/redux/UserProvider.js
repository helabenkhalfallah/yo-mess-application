const UserFragment = (state) => ({
  user: state?.user?.user,
});

const UserLoginFragment = (state) => ({
  userLoginLoading: state?.user?.loginLoading,
  userLoginError: state?.user?.loginError,
});

const UserUpdateFragment = (state) => ({
  userUpdateLoading: state?.user?.updateLoading,
  userUpdateError: state?.user?.updateError,
});

const UserProvider = {
  UserFragment,
  UserLoginFragment,
  UserUpdateFragment,
};

export default UserProvider;
