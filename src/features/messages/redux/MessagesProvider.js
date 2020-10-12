const MessagesFragment = (state) => ({
  messages: state?.messages?.messages,
  messagesLoading: state?.messages?.loading,
  messagesError: state?.messages?.error,
});

const MessageAddFragment = (state) => ({
  messageAdd: state?.messageAdd?.messageAdd,
  messageAddLoading: state?.messageAdd?.loading,
  messageAddError: state?.messageAdd?.error,
});

const MessageDeleteFragment = (state) => ({
  messageDelete: state?.messageDelete?.messageDelete,
  messageDeleteLoading: state?.messageDelete?.loading,
  messageDeleteError: state?.messageDelete?.error,
});

const MessagesProvider = {
  MessagesFragment,
  MessageAddFragment,
  MessageDeleteFragment,
};

export default MessagesProvider;
