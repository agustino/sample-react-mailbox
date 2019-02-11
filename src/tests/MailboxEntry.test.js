import React from 'react';
import { shallow } from 'enzyme';
import MailboxEntry from '../MailboxEntry';

describe('MailboxEntry', () => {
  const entry = shallow(
    <MailboxEntry
      sender="Ernest Hemingway"
      subject="animals"
      time_sent={1459239867}
    />
  );

  it('renders a <tr>', () => {
    expect(entry.type()).toBe('tr');
  });

  it('should display sender, subject', () => {
    expect(entry.childAt(0).text()).toContain('Ernest Hemingway');
    expect(entry.childAt(1).text()).toContain('animals');
  });

  describe('time_send', () => {
    it('should be presented in the form "Mon 06 July, 10:53", in local time', () => {
      expect(entry.find('span').text()).toBe('Sa., 17. Januar, 22:20');
    });
  });

  it('has an  initial `has been read` state of false', () => {
    expect(entry.state('hasBeenRead')).toBe(false);
  });

  it('renders unread messages as highlighted', () => {
    entry.setState({ hasBeenRead: false });
    expect(entry.prop('data-highlighted')).toBe(true);
  });

  it.skip('renders read messages as unhighlighted, when it was clicked', () => {
    entry.setState({ hasBeenRead: false });
    entry.simulate('click');
    expect(entry.state('hasBeenRead')).toBe(true);
    expect(entry.prop('data-highlighted')).toBe(false);
  });

  it('removes entry, when clickOn x-character', () => {
    entry.find('button').simulate('click');
    expect(entry.state('showComponent')).toBe(false);
  });
});
