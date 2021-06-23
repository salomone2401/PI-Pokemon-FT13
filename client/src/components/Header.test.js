import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({adapter: new Adapter()});

describe('<LandingPage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('El primer Link debe tener el texto "Pokemon App" y cambiar la ruta hacia "/pokemon".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/pokemon');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(0).text()).toEqual('Pokemon App');
  });
})