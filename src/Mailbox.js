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
      messages: this.props.messages,
    };
  }

  handleMessage = i => {
    var index = this.state.messages
      .map(function(d) {
        return d['uid'];
      })
      .indexOf(i);

    this.setState({
      messageIndex: index,
    });
  };

  handleMessageDelete = i => {
    this.setState({
      messages: this.state.messages.filter(word => word.uid != i),
    });
  };

  render() {
    const { ...rest } = this.props;

    return (
      <div {...rest}>
        <h1>Mailbox</h1>
        <MailboxNavigation
          messages={this.state.messages}
          handleMessage={this.handleMessage}
          handleMessageDelete={this.handleMessageDelete}
        />
        <MailboxContent {...this.state.messages[this.state.messageIndex]} />
      </div>
    );
  }
}

export default Mailbox;
