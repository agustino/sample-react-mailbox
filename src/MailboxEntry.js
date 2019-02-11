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
          <span>{this.props.time_sent}</span>
          <i onClick={this.handleDeleteClick}>×</i>
        </td>
      </tr>
    );
  }
}

export default MailboxEntry;
