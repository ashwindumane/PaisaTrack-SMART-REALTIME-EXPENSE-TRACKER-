import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card w-full">
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4">
        <div>
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-500">
            Track your earnings and analyze your income trends
          </p>
        </div>
        <button onClick={onAddIncome} className="add-btn w-full md:w-auto">
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      <div className="mt-6 md:mt-10">
        <CustomBarChart data={chartData} xKey="month" />
      </div>
    </div>
  );
};

export default IncomeOverview;
