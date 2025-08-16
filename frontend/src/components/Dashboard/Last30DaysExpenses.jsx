import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper'
import CustomBarChart from '../Charts/CustomBarChart'

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const result = prepareExpenseBarChartData(data)
    setChartData(result)
  }, [data])

  return (
    <div className="card col-span-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>

      <div className="mt-6 w-full overflow-x-auto">
        <CustomBarChart data={chartData} xKey="day" />
      </div>
    </div>
  )
}

export default Last30DaysExpenses
