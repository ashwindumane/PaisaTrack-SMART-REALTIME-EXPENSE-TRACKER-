import React from 'react'
import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">All Expenses</h5>

        <button className="card-btn self-end sm:self-auto" onClick={onDownload}>
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format('Do MMM YYYY')}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
