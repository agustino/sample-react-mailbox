import React from 'react';

class MailboxEntry extends React.PureComponent {
  state = {
    hasBeenRead: false,
  };

  render() {
    return (
      <tr {...rest}>
        <td>{sender}</td>
        <td>{subject}</td>
        <td>{time_sent}</td>
      </tr>
    );
  }
}

export default MailboxEntry;
