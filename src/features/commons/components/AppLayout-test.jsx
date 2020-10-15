import React from 'react';
import { mount, } from 'enzyme';
import { expect, } from 'chai';
import AppLayout from './AppLayout';

describe('Test Suite - AppLayout', () => {
  it('It shoudld render Acceuil, AppHeader, AppSiderBar & Content', () => {
    const wrapper = mount(
      <AppLayout
        showSideBar
        selectedMenu="home"
        content={<span>Hello</span>}
        onNewMessage={() => {}}
        onMenuSelected={() => {}}
      />
    );
    // console.log(wrapper.debug());
    expect(wrapper.find('[className="app-layout"]')).to.have.length(2);
    expect(wrapper.find('AppHeader')).to.have.length(1);
    expect(wrapper.find('AppSiderBar')).to.have.length(1);
    expect(wrapper.find('[className="app-layout_sidebar"]')).to.have.length(3);
    expect(wrapper.find('[className="app-layout_content"]')).to.have.length(2);
    expect(wrapper.find('AppToolBar')).to.have.length(1);

    // AppToolBar
    expect(wrapper
      .find('AppToolBar')
      .props()
      .title).to.equal('Acceuil');

    // AppSiderBar
    expect(wrapper
      .find('AppSiderBar')
      .props()
      .selectedMenu).to.equal('home');
  });
});
