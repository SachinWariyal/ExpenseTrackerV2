// import React from 'react'

import { useState } from "react";
import IncomeModal from "../IncomeModal/IncomeModal";
import "./WalletBalance.css";
import PropTypes from 'prop-types';
const WalletBalance = ({ balance,addIncome }) => {
    const [showIncomeModal, setShowIncomeModal] = useState(false);

  const handleToggleIncomeModal = () => {
    setShowIncomeModal(prevState => !prevState);
  };
  return (
    <div className='walletbalance'>
        <h1 className='walletbalance-text'>Wallet Balance: <span className='price'>{ balance }</span></h1>
          
        <button className='walletbalance-button' onClick={handleToggleIncomeModal}>+ Add Income</button>
        {showIncomeModal && (
          <IncomeModal addIncome={addIncome} onClose={handleToggleIncomeModal} />
        )}
    </div>
  )
}
WalletBalance.propTypes = {
    addIncome: PropTypes.func.isRequired,
    balance: PropTypes.func.isRequired
  };
export default WalletBalance