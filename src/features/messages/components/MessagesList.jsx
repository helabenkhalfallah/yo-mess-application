import React, { useState, } from 'react';
import List from 'antd/es/list';
import Modal from 'antd/es/modal';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import MessagesPropTypes from '../commons/MessagesPropTypes';
import MessageListRow from './MessageListRow';
import './Messages.scss';

// TODO : use load more or virtualized if dataSource isn't paginated
// https://ant.design/components/list/#components-list-demo-infinite-load
// https://ant.design/components/list/#components-list-demo-infinite-virtualized-load

const MessagesList = ({
  messages,
}) => {
  const [
    selectedItem,
    setSelectedItem,
  ] = useState(null);
  const [
    showDetails,
    setShowDetails,
  ] = useState(false);
  return (
    <>
      {(messages && messages.length) && (
        <Row>
          <Col
            span={16}
            offset={2}
          >
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={(item) => (
                <MessageListRow
                  item={item}
                  onItemSelected={() => {
                    setSelectedItem(item);
                    setShowDetails(true);
                  }}
                />
              )}
            />
          </Col>
        </Row>
      )}
      {(showDetails && selectedItem) && (
        <Modal
          title="YoMess !"
          centered
          closable={false}
          visible={showDetails}
          cancelText="Annuler"
          okText="OK"
          okType="danger"
          onOk={() => setShowDetails(false)}
          onCancel={() => setShowDetails(false)}
        >
          <MessageListRow
            showFullDescription
            item={selectedItem}
          />
        </Modal>
      )}
    </>
  );
};

MessagesList.propTypes = {
  ...MessagesPropTypes.propTypes,
};

MessagesList.defaultProps = {
  ...MessagesPropTypes.defaultProps,
};

export default MessagesList;
