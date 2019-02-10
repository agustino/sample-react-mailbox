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

  it('renders unread messages as highlighted', () => {
    entry.setState({ hasBeenRead: false });
    expect(entry.prop('data-highlighted')).toBe(true);
  });

  it('renders read messages as unhighlighted, when it was clicked', () => {
    entry.setState({ hasBeenRead: false });
    entry.simulate('click');
    expect(entry.state('hasBeenRead')).toBe(true);
    expect(entry.prop('data-highlighted')).toBe(false);
  });

  it('removes entry, when clickOn x-character', () => {
    entry.find('i').simulate('click');
    expect(entry.state('render')).toBe(false);
  });
});
