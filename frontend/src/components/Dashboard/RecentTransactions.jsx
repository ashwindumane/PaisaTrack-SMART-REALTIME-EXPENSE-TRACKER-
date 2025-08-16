import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">Recent Transactions</h5>

        <button className="card-btn self-end sm:self-auto" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === 'expense' ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format('Do MMM YYYY')}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
