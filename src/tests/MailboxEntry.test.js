import React from 'react';
import { shallow } from 'enzyme';
import MailboxEntry from '../MailboxEntry';

describe('MailboxEntry', () => {
  const entry = shallow(<MailboxEntry />);

  it('renders a <tr>', () => {
    expect(entry.type()).toBe('tr');
  });

  it('has an  initial `has been read` state of false', () => {
    expect(entry.state('hasBeenRead')).toBe(false);
  });

  it('renders unread messages as highlighted', () => {});

  it('renders read messages as unhighlighted, when it was clicked', () => {});

  it('removes entry, when clickOn x-character', () => {});
});
