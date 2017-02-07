import React from 'react';
import { shallow } from 'enzyme';

import ReactTextField from '../../src/components/ReactTextField';

describe('TextField', () => {
  describe('render', () => {
    it('is ReactTextField--container class', () => {
      const wrapper = shallow(<ReactTextField />);
      expect(wrapper.is('.ReactTextField--container')).toBe(true);
    });
  });
});

