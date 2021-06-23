import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';

configure({adapter: new Adapter()});

describe('<LandingPage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  it('Deberia renderizar un <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  
})