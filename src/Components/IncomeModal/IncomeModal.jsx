// import React, { useState } from 'react';
import { useState } from "react";
import "./IncomeModal.css";
import PropTypes from 'prop-types';
const IncomeModal = ({ addIncome, onClose }) => {
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleIncomeChange = (event) => {
    setIncomeAmount(event.target.value);
  };

  const handleAddIncome = () => {
    if (!incomeAmount || isNaN(parseInt(incomeAmount))) {
      alert('Please enter a valid income amount!');
      return;
    }
    addIncome(parseInt(incomeAmount));
    onClose(); // Close the modal after adding income
  };
  const handleCancel = () => {
    onClose();
  }
  const handleClose = (event) => {
    if (event.target.classList.contains('modal-background')) {
      onClose(); // Close the modal when clicking outside of it
    }
  };

  return (
    <div className="modal-background" onClick={handleClose}>
      <div className="modal-content">
        <h2>Add Balance</h2>
        <input
          type="text"
          placeholder="Income Amount"
          value={incomeAmount}
          onChange={handleIncomeChange}
        />
        <button onClick={handleAddIncome}>Add Balance</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};
IncomeModal.propTypes = {
    addIncome: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };
export default IncomeModal;
