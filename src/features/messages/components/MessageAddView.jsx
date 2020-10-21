import React, { useState, } from 'react';
import Modal from 'antd/es/modal';
import Input from 'antd/es/input';
import Select from 'antd/es/select';
import MessagesPropTypes from '../commons/MessagesPropTypes';

const { TextArea, } = Input;
const { Option, } = Select;

const MessageAddView = ({
  currentUser,
  type,
  userFriends,
  showAddMessage,
  onSendMessage,
  onCancel,
}) => {
  const [
    message,
    setMessage,
  ] = useState(null);
  const [
    receiver,
    setReceiver,
  ] = useState(
    type !== 'public'
      ? userFriends?.[0]?.userMail
      : null
  );
  return (
    <div>
      <Modal
        title="Avec YoMess, échangez des messages à tout moment et en toute sécurité !"
        centered
        closable={false}
        visible={showAddMessage}
        cancelText="Annuler"
        okText="Valider"
        okType="danger"
        onOk={() => onSendMessage({
          message,
          sender: currentUser,
          receiver,
        })}
        onCancel={onCancel}
      >
        {type !== 'public' && (
          <Select
            className="message_send--select"
            value={receiver}
            onChange={(value) => setReceiver(value)}
          >
            {userFriends?.map((friend) => {
              const {
                userFirstName,
                userLastName,
                userMail,
              } = friend;
              const receiverName = `${userFirstName || ''} ${userLastName || ''}`;
              return (
                <Option
                  key={userMail}
                  value={userMail}
                >
                  {receiverName}
                </Option>
              );
            })}
          </Select>
        )}
        <TextArea
          value={message}
          onChange={(event) => setMessage(event?.target?.value)}
          rows={4}
        />
      </Modal>
    </div>
  );
};

MessageAddView.propTypes = {
  ...MessagesPropTypes.propTypes,
};

MessageAddView.defaultProps = {
  ...MessagesPropTypes.defaultProps,
};

export default MessageAddView;
