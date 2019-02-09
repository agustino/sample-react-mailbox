import React from 'react';
import { shallow } from 'enzyme';
import MailboxNavigation from '../MailboxNavigation';

describe('MailboxNavigation', () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<MailboxNavigation />);
  });

  it('renders a <nav>', () => {
    expect(nav.type()).toBe('nav');
  });

  it('should be on the left', () => {});

  it('should list all provided messages', () => {});

  it('should display the following fields', () => {
    // sender (String)
    // subject (String)
    // time_sent (Number)
  });

  describe('time_send', () => {
    it('should be presented in the form "Mon 06 July, 10:53", in local time', () => {});
  });
});
