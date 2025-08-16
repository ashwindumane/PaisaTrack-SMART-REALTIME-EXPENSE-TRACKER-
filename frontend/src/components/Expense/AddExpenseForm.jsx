import React, { useState } from 'react'
import Input from '../Inputs/Input'
import EmojiPickerPopup from '../EmojiPickerPopup'

const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: '',
    amount: '',
    date: '',
    icon: '',
  })

  const handleChange = (key, value) => setIncome({ ...income, [key]: value })

  const handleAddExpense = () => {
    const finalIncome = {
      ...income,
      date: income.date || new Date().toISOString().split('T')[0],
    }
    onAddExpense(finalIncome)
  }

  return (
    <div className="space-y-4">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />

      <Input
        value={income.category}
        onChange={({ target }) => handleChange('category', target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          value={income.amount}
          onChange={({ target }) => handleChange('amount', target.value)}
          label="Amount"
          type="number"
        />

        <Input
          value={income.date}
          onChange={({ target }) => handleChange('date', target.value)}
          label="Date"
          type="date"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill w-full sm:w-auto"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  )
}

export default AddExpenseForm
