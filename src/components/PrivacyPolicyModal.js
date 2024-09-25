import React from 'react';
import './Modal.css'; // Add styling for modals

const PrivacyPolicyModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Substitution & Privacy Policy</h2>
        <p>At Suha's Roses, we value your privacy and strive to provide you with the best possible service...</p>
        {/* Add the rest of your Privacy Policy content here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
