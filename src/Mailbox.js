import React from 'react';
import MailboxNavigation from './MailboxNavigation';
import MailboxContent from './MailboxContent';

import './Mailbox.sass';

class Mailbox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleMessage = this.handleMessage.bind(this);

    this.state = {
      messageIndex: 0,
    };
  }

  handleMessage = i => {
    var index = this.props.messages
      .map(function(d) {
        return d['uid'];
      })
      .indexOf(i);

    this.setState({
      messageIndex: index,
    });
  };

  render() {
    const { messages, ...rest } = this.props;

    return (
      <div {...rest}>
        <h1>Mailbox</h1>
        <MailboxNavigation
          messages={messages}
          handleMessage={this.handleMessage}
        />
        <MailboxContent {...messages[this.state.messageIndex]} />
      </div>
    );
  }
}

export default Mailbox;
