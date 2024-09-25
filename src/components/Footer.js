import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from 'react-icons/fa';
import './Footer.css'; // Make sure this path is correct

// Import the modals
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import TermsConditionsModal from './TermsConditionsModal'; // New import
import PrivacyPolicyModal from './PrivacyPolicyModal'; // New import
import DeliveryReturnPolicyModal from './DeliveryReturnPolicyModal'; // New import

const Footer = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false); // New state
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false); // New state
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false); // New state

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h2>Categories</h2>
            <ul>
              <li><Link to="/birthday">Birthday</Link></li>
              <li><Link to="/thank-you">Thank You</Link></li>
              <li><Link to="/plants">Plants</Link></li>
              <li><Link to="/roses">Roses</Link></li>
              <li><Link to="/products">Best Sellers</Link></li> {/* Updated link */}
            </ul>
          </div>

          <div className="footer-section">
            <h2>POLICIES</h2>
            <ul>
              <li onClick={() => setTermsModalOpen(true)}>Terms & Conditions</li>
              <li onClick={() => setPrivacyModalOpen(true)}>Substitution & Privacy Policy</li>
              <li onClick={() => setDeliveryModalOpen(true)}>Delivery & Return Policy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Contact</h2>
            <ul>
              <li onClick={() => setLoginModalOpen(true)}>Log in</li>
              <li onClick={() => setSignUpModalOpen(true)}>Sign Up</li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <a href="#facebook"><FaFacebookF /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>

        <div className="footer-credit-cards">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcDiscover />
          <FaCcAmex />
        </div>
      </div>

      {/* Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
      <TermsConditionsModal show={isTermsModalOpen} onClose={() => setTermsModalOpen(false)} /> {/* New modal */}
      <PrivacyPolicyModal show={isPrivacyModalOpen} onClose={() => setPrivacyModalOpen(false)} /> {/* New modal */}
      <DeliveryReturnPolicyModal show={isDeliveryModalOpen} onClose={() => setDeliveryModalOpen(false)} /> {/* New modal */}
    </footer>
  );
};

export default Footer;
