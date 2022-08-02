import React from 'react';
import './HeaderManager.css';
import { FiLogOut } from "react-icons/fi";

var HeaderManager = function HeaderManager() {
  return React.createElement(
    'div',
    { className: 'bgHeader' },
    React.createElement('img', { src: '/Logo2.png', 'class': 'Logo2' }),
    React.createElement(FiLogOut, { className: 'logout' })
  );
};

export default HeaderManager;