import React from 'react';
import { shallow } from 'enzyme';
import MailboxContent from '../MailboxContent';

describe('MailboxContent', () => {
  const entry = shallow(<MailboxContent />);

  it('renders a <div>', () => {
    expect(entry.type()).toBe('div');
  });
});
