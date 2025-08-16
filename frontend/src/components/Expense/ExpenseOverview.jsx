import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { prepareExpenseLineChartData } from '../../utils/helper'
import CustomLineChart from '../Charts/CustomLineChart'

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions)
    setChartData(result)
  }, [transactions])

  return (
    <div className="card">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold">Expense Overview</h5>
          <p className="text-xs text-gray-600 mt-1">
            Track your spending trends over time and gain insights into where
            your money goes
          </p>
        </div>

        <button
          className="add-btn w-full sm:w-auto flex items-center justify-center"
          onClick={onExpenseIncome}
        >
          <LuPlus className="text-lg" />
          <span className="ml-1">Add Expense</span>
        </button>
      </div>

      <div className="mt-10 w-full overflow-x-auto">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  )
}

export default ExpenseOverview
