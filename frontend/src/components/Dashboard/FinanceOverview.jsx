import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const COLORS = ['#875CF5', '#FA2C37', '#FF6900']

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: 'Total Balance', amount: totalBalance },
    { name: 'Total Expense', amount: totalExpense },
    { name: 'Total Income', amount: totalIncome },
  ]

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">Financial Overview</h5>
      </div>

      <div className="mt-6 w-full overflow-x-auto">
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`₹${totalBalance}`}
          colors={COLORS}
          showTextAnchor
        />
      </div>
    </div>
  )
}

export default FinanceOverview
