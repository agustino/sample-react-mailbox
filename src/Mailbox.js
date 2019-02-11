import React from 'react';
import PropTypes from 'prop-types';
import MailboxNavigation from './MailboxNavigation';
import MailboxEntry from './MailboxEntry';
import MailboxContent from './MailboxContent';

class Mailbox extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape(MailboxEntry.propTypes).isRequired
    ),
  };

  state = {
    messageIndex: 0,
  };

  render() {
    const { messages, ...rest } = this.props;

    return (
      <div {...rest}>
        <h1>Mailbox</h1>
        <MailboxNavigation messages={messages} />
        <MailboxContent {...messages[this.state.messageIndex]} />
      </div>
    );
  }
}

export default Mailbox;
