import React from 'react';
import { mount, } from 'enzyme';
import { expect, } from 'chai';
import MessagesList from './MessagesList';
import MessagesDataMock from '../commons/MessagesDataMock';

const {
  messagesFakeResponse,
} = MessagesDataMock;

describe('Test Suite - MessagesList', () => {
  it('It shoudld render Messages List + simulate Message Details', () => {
    const {
      data,
    } = messagesFakeResponse;
    const wrapper = mount(
      <MessagesList
        messages={data}
      />
    );
    expect(wrapper.find('List')).to.have.length(1);
    expect(wrapper.find('MessageListRow')).to.have.length(2);

    // list
    expect(wrapper
      .find('List')
      .props()
      .itemLayout).to.equal('horizontal');
    expect(wrapper
      .find('List')
      .props()
      .dataSource).to.deep.equal(data);

    // items
    expect(wrapper
      .find('MessageListRow')
      .at(0)
      .props()
      .item).to.deep.equal(data[0]);
    expect(wrapper
      .find('MessageListRow')
      .at(1)
      .props()
      .item).to.deep.equal(data[1]);

    // first item
    expect(wrapper
      .find('Text')
      .at(0)
      .text()).to.equal('Sean Carr');
    expect(wrapper
      .find('Text')
      .at(1)
      .text()).to.equal('08/10/2020');
    expect(wrapper
      .find('Text')
      .at(2)
      .text()).to.equal('23 ème édition du rallye Coeur de France, youpi !');

    // second item
    expect(wrapper
      .find('Text')
      .at(3)
      .text()).to.equal('Isabelle Howard');
    expect(wrapper
      .find('Text')
      .at(4)
      .text()).to.equal('08/10/2020');
    expect(wrapper
      .find('Text')
      .at(5)
      // eslint-disable-next-line max-len
      .text()).to.equal('Météo semaine prochaine : comme un avant-goût d\'hiver, le vent de Nord maintiendra les températures  ...');

    // simulate click on first item
    // it should render the modal with messages details
    expect(wrapper
      .find('MessageListRow')
      .at(0)
      .simulate('click'));
    expect(wrapper.find('MessageListRow')).to.have.length(3);
    expect(wrapper
      .find('Text')
      .at(8)
      .text()).to.equal(data[0].messageText);
  });

  it('It should render an empty view', () => {
    const wrapper = mount(
      <MessagesList
        messages={null}
      />
    );
    expect(wrapper.find('List')).to.have.length(0);
    expect(wrapper.find('MessageListRow')).to.have.length(0);
  });
});
