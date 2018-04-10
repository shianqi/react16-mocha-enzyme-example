import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './index';

describe('ClassicTheme render', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.classic_theme_container')).to.equal(true);
  });
});
