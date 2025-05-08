// File: src/components/modal/Modal.jsx

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

/**
 * Modal Component - Wrapper for modal dialog
 */
const Modal = ({ active = false, id, children }) => {
  const [isActive, setIsActive] = useState(active);

  // Update internal state when prop changes
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      const modal = e.currentTarget;
      modal.classList.remove('active');
      setIsActive(false);
    }
  };

  return (
    <div
      id={id}
      className={`modal ${isActive ? 'active' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="modal__overlay"></div>
      <div className="modal__container">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/**
 * ModalContent Component - Content inside the modal with close button
 */
export const ModalContent = ({ onClose, children }) => {
  const contentRef = useRef(null);

  const handleClose = () => {
    const modal = contentRef.current?.parentNode?.parentNode;
    if (modal) {
      modal.classList.remove('active');
    }
    if (onClose) onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <button type="button" className="modal__content__close" onClick={handleClose}>
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

// Export Modal as default and ModalContent as named export
export default Modal;