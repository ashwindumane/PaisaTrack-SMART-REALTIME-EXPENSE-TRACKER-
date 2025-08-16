import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  const handleAddIncome = () => {
    const finalIncome = {
      ...income,
      date: income.date || new Date().toISOString().split("T")[0], // Default today
    };
    onAddIncome(finalIncome);
  };

  return (
    <div className="w-full space-y-4">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          value={income.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          type="number"
        />
        <Input
          value={income.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Income Date"
          type="date"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="add-btn add-btn-fill w-full md:w-auto"
          onClick={handleAddIncome}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
