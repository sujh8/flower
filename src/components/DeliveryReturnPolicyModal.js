import React from 'react';
import './Modal.css'; // Add styling for modals

const DeliveryReturnPolicyModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Delivery & Return Policy</h2>
        <p>We aim to deliver your orders promptly. Delivery times may vary based on your location...</p>
        {/* Add the rest of your Delivery & Return Policy content here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeliveryReturnPolicyModal;
