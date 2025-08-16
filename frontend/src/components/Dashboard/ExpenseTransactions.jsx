import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">Expenses</h5>

        <button className="card-btn self-end sm:self-auto" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {transactions?.slice(0, 4)?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format('Do MMM YYYY')}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  )
}

export default ExpenseTransactions
