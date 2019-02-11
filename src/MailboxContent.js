import React from 'react';
import PropTypes from 'prop-types';

const MailboxContent = ({ message }) => (
  <main>
    <h2>Mail</h2>
    <p>{message}</p>
  </main>
);

MailboxContent.propTypes = {
  message: PropTypes.string,
};

export default MailboxContent;
