import React from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>Login</h2>
        </div>
        <form className="modal-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="modal-links">
          <a href="#signup" onClick={onClose}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
