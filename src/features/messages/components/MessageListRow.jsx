import React from 'react';
import Typography from 'antd/es/typography';
import List from 'antd/es/list';
import Avatar from 'antd/es/avatar';
import MessagesPropTypes from '../commons/MessagesPropTypes';

const {
  Text,
} = Typography;

const MessageListRow = ({
  item,
  showFullDescription,
  onItemSelected,
}) => {
  const {
    messageSender: {
      userFirstName,
      userLastName,
    } = {},
    messageText,
    messageDate,
  } = item;
  const title = `${userFirstName || ''} ${userLastName || ''}`;
  const description = messageText || '';
  const shortDescription = description?.length > 100
    ? `${description?.substr(0, 100)} ...`
    : description;
  return (
    <List.Item
      className="message_list-item"
      onClick={() => {
        if (onItemSelected) {
          onItemSelected(item);
        }
      }}
    >
      <List.Item.Meta
        avatar={<Avatar src="https://image.flaticon.com/icons/png/512/8/8331.png" />}
        title={(
          <>
            <Text>{title}</Text>
            <br />
            <Text type="secondary">{messageDate || ''}</Text>
          </>
        )}
        description={<Text>{showFullDescription ? description : shortDescription}</Text>}
      />
    </List.Item>
  );
};

MessageListRow.propTypes = {
  ...MessagesPropTypes.propTypes,
};

MessageListRow.defaultProps = {
  ...MessagesPropTypes.defaultProps,
};

export default MessageListRow;
