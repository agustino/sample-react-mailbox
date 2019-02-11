import React from 'react';
import PropTypes from 'prop-types';

class MailboxEntry extends React.PureComponent {
  static propTypes = {
    uid: PropTypes.string,
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string,
    time_sent: PropTypes.number.isRequired,
    handleMessage: PropTypes.func,
  };

  state = {
    hasBeenRead: false,
    showComponent: true,
  };

  handleDeleteClick = () => {
    this.setState({ showComponent: false });
  };

  timeSend = timestamp => {
    var date = new Date(timestamp);
    var options = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return <span>{date.toLocaleString('de-DE', options)}</span>;
  };

  handleSelectMessage = () => {
    var i = this.props.uid;
    this.props.handleMessage(i);
    this.setState({ hasBeenRead: true });
  };

  render() {
    return (
      <tr
        uid={this.props.uid}
        data-highlighted={!this.state.hasBeenRead}
        onClick={this.handleSelectMessage}
      >
        {this.state.showComponent && (
          <React.Fragment>
            <td>{this.props.sender}</td>
            <td>{this.props.subject}</td>
            <td>
              {this.timeSend(this.props.time_sent)}
              <button onClick={this.handleDeleteClick.bind(this)}>×</button>
            </td>
          </React.Fragment>
        )}
      </tr>
    );
  }
}

export default MailboxEntry;
