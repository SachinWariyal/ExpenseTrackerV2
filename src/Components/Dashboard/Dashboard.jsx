// import React from 'react'

import { useState } from "react";
import WalletBalance from "../WalletBalance/WalletBalance"
import "./Dashboard.css"
import Expenses from "../Expenses/Expenses";
const Dashboard = () => {
    const [walletBalance, setWalletBalance] =  useState(5000);


  const addIncome =(amount)=>{
    setWalletBalance(prevBalance => prevBalance + amount)
  }
  return (
    <div className="dashboard-menu">
        <h1 className='top-heading'>Expense Tracker</h1>
        <div className="top-dashboard-menu">
        <WalletBalance balance={walletBalance} addIncome={addIncome}/>
         <Expenses/>   
        </div>
    </div>
  )
}

export default Dashboard