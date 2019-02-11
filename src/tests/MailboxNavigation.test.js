import React from 'react';
import { shallow } from 'enzyme';
import MailboxNavigation from '../MailboxNavigation';

describe('MailboxNavigation', () => {
  let nav;

  beforeEach(() => {
    nav = shallow(
      <MailboxNavigation
        sender="Ernest Hemingway"
        subject="animals"
        time_sent={1459239867}
      />
    );
  });

  it('renders a <nav>', () => {
    expect(nav.type()).toBe('nav');
  });

  it('should be on the left', () => {
    // NOTE: Probably not worth a test, but kept as a reminder.
  });

  it('should list all provided messages', () => {
    const messages = nav.props.messages;
    const MailboxEntries = nav.find('MailboxEntries');
    expect(MailboxEntries.prop('messages')).toBe(messages);
  });
});
