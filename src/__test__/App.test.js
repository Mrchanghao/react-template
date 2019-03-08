import React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App';


describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
})
