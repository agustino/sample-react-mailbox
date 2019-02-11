import React from 'react';
import PropTypes from 'prop-types';

const MailboxContent = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

MailboxContent.propTypes = {
  message: PropTypes.string,
};

export default MailboxContent;
