import React, { useState, useEffect } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const COLORS = ['#875CF5', '#FA2C37', '#FF6900', '#4f39f6']

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }))
    setChartData(dataArr)
  }, [data])

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h5 className="text-lg font-semibold">Last 60 Days Income</h5>
      </div>

      <div className="mt-6 w-full overflow-x-auto">
        <CustomPieChart
          data={chartData}
          label="Total Income"
          totalAmount={`₹${totalIncome}`}
          showTextAnchor
          colors={COLORS}
        />
      </div>
    </div>
  )
}

export default RecentIncomeWithChart
