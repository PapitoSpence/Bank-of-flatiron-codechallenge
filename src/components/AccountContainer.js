import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  useEffect(() => {
    fetch("https://api.npoint.io/8a929262387db24036fe" )
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  },)

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;
