import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from '../src/Mailbox';
import messages from './messages';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Mailbox messages={messages} />, container);
