import React from 'react';

class MailboxEntry extends React.PureComponent {
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
        data-highlighted={!this.state.hasBeenRead}
        onClick={this.handleHasBeenReadClick}
      >
        <td>{this.props.sender}</td>
        <td>{this.props.subject}</td>
        <td>
          {this.props.time_sent}
          <i onClick={this.handleDeleteClick}>×</i>
        </td>
      </tr>
    );
  }
}

export default MailboxEntry;
