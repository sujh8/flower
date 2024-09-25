import React from 'react';
import './SignUpModal.css';

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h2>Sign Up</h2>
        </div>
        <form className="modal-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="modal-links">
          <a href="#login" onClick={onClose}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
