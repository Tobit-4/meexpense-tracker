import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Groceries",
      description: "Weekly grocery shopping",
      amount: 125.75,
      category: "Food",
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      name: "Gas",
      description: "Car fuel",
      amount: 45.20,
      category: "Transportation",
      date: new Date().toLocaleDateString()
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, {
      id: expenses.length + 1,
      ...newExpense,
      date: new Date().toLocaleDateString()
    }]);
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="content-wrapper">
        
        <ExpenseForm onAddExpense={addExpense} />
        <div className="table-section">
          
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;