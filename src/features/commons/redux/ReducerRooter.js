import {
  UserReducer,
  UserFriendsReducer,
} from '../../users/redux';
import {
  MessageAddReducer,
  MessageDeleteReducer,
  MessagesReducer,
} from '../../messages/redux';

const ReducerRooter = {
  user: UserReducer,
  userFriends: UserFriendsReducer,
  messageAdd: MessageAddReducer,
  messageDelete: MessageDeleteReducer,
  messages: MessagesReducer,
};

export default ReducerRooter;
