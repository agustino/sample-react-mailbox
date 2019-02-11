import React from 'react';
import PropTypes from 'prop-types';
import MailboxEntry from './MailboxEntry';

function MailboxEntries(props) {
  const mailboxEntries = props.messages.map(message => (
    <MailboxEntry
      key={message.uid}
      uid={message.uid}
      sender={message.sender}
      subject={message.subject}
      time_sent={message.time_sent}
      handleMessage={props.handleMessage}
    />
  ));
  return <tbody>{mailboxEntries}</tbody>;
}

MailboxEntries.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MailboxEntry.propTypes))
    .isRequired,
  handleMessage: PropTypes.func,
};

const MailboxNavigation = ({ messages, handleMessage }) => {
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
        <MailboxEntries messages={messages} handleMessage={handleMessage} />
      </table>
    </nav>
  );
};

MailboxNavigation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MailboxEntry.propTypes))
    .isRequired,
  handleMessage: PropTypes.func,
};

export default MailboxNavigation;
