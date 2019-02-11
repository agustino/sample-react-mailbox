import React from 'react';
import PropTypes from 'prop-types';
import MailboxEntry from './MailboxEntry';

function MailboxEntries(props) {
  const mailboxEntries = props.messages.map(message => (
    <MailboxEntry
      key={message.uid}
      sender={message.sender}
      subject={message.subject}
      time_sent={message.time_sent}
    />
  ));
  return <tbody>{mailboxEntries}</tbody>;
}

const MailboxNavigation = ({ messages }) => {
  return (
    <nav>
      <h2>Inbox</h2>
      <table>
        <thead>
          <tr>
            <th>Sender</th>
            <th>Subject</th>
            <th>Time Sent</th>
          </tr>
        </thead>
        <MailboxEntries messages={messages} />
      </table>
    </nav>
  );
};

MailboxNavigation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MailboxEntry.propTypes))
    .isRequired,
};

export default MailboxNavigation;
