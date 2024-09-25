import React from 'react';
import './Modal.css'; // Add styling for modals

const TermsConditionsModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Terms & Conditions</h2>
        <p>Welcome to Suha's Roses. These Terms & Conditions govern your use of our website and services...</p>
        {/* Add the rest of your Terms & Conditions content here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TermsConditionsModal;
