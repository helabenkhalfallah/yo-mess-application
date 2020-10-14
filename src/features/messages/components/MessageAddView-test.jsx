import React from 'react';
import { mount, } from 'enzyme';
import { expect, } from 'chai';
import MessageAddView from './MessageAddView';
import MessagesDataMock from '../commons/MessagesDataMock';

const {
  currentUser,
  userFriends,
} = MessagesDataMock;

describe('Test Suite - MessageAddView', () => {
  it('Send a public message', () => {
    const wrapper = mount(
      <MessageAddView
        showAddMessage
        type="public"
        currentUser={currentUser}
        userFriends={userFriends}
        onSendMessage={() => {}}
        onCancel={() => {}}
      />
    );
    expect(wrapper.find('Modal')).to.have.length(1);
    expect(wrapper.find('Select')).to.have.length(0);
    expect(wrapper.find('TextArea')).to.have.length(2);

    // modal
    expect(wrapper
      .find('Modal')
      .props()
      .title).to.equal('Avec YoMess, échangez des messages à tout moment et en toute sécurité !');
    expect(wrapper
      .find('Modal')
      .props()
      .okType).to.equal('danger');
    expect(wrapper
      .find('Modal')
      .props()
      .okText).to.equal('Valider');
    expect(wrapper
      .find('Modal')
      .props()
      .cancelText).to.equal('Annuler');
    expect(wrapper
      .find('Modal')
      .props()
      .centered).to.equal(true);
    expect(wrapper
      .find('Modal')
      .props()
      .closable).to.equal(false);
    expect(wrapper
      .find('Modal')
      .props()
      .visible).to.equal(true);

    // simulate onchange message TextArea
    expect(wrapper
      .find('TextArea')
      .at(1)
      .props()
      .value).to.equal('');
    expect(wrapper
      .find('TextArea')
      .at(1)
      .simulate('change', {
        target: {
          value: 'Que penses-tu de venir chez nous le weekend?',
        },
      }));
    expect(wrapper
      .find('TextArea')
      .at(1)
      .props()
      .value).to.equal('Que penses-tu de venir chez nous le weekend?');
  });

  it('Send a private message', () => {
    const wrapper = mount(
      <MessageAddView
        showAddMessage
        type="private"
        currentUser={currentUser}
        userFriends={userFriends}
        onSendMessage={() => {}}
        onCancel={() => {}}
      />
    );
    expect(wrapper.find('Modal')).to.have.length(1);
    expect(wrapper.find('Select')).to.have.length(2);
    expect(wrapper.find('TextArea')).to.have.length(2);

    // friends select
    expect(wrapper
      .find('Select')
      .at(0)
      .props()
      .className).to.equal('message_send--select');
    expect(wrapper
      .find('Select')
      .at(0)
      .props()
      .value).to.equal('mellalaurent@hotmail.fr');
    expect(wrapper
      .find('Select')
      .at(0)
      .props()
      .children).to.have.length(3);
  });
});
