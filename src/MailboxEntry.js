import React from 'react';
import PropTypes from 'prop-types';

class MailboxEntry extends React.PureComponent {
  static propTypes = {
    uid: PropTypes.string,
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string,
    time_sent: PropTypes.number.isRequired,
  };

  state = {
    hasBeenRead: false,
  };

  handleHasBeenReadClick = () => {
    this.setState(() => ({ hasBeenRead: true }));
  };

  handleDeleteClick = () => {
    this.setState(() => ({ render: false }));
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

  render() {
    return (
      <tr
        key={this.props.uid}
        data-highlighted={!this.state.hasBeenRead}
        onClick={this.handleHasBeenReadClick}
      >
        <td>{this.props.sender}</td>
        <td>{this.props.subject}</td>
        <td>
          {this.timeSend(this.props.time_sent)}
          <button onClick={this.handleDeleteClick}>×</button>
        </td>
      </tr>
    );
  }
}

export default MailboxEntry;
