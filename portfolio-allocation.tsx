import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PortfolioAllocation = () => {
  const allocations = [
    { ticker: 'AAPL', name: 'Apple Inc.', percentage: 26.2, dollars: 1310.00 },
    { ticker: 'AXP', name: 'American Express Company', percentage: 15.4, dollars: 770.00 },
    { ticker: 'BAC', name: 'Bank of America Corporation', percentage: 11.9, dollars: 595.00 },
    { ticker: 'KO', name: 'The Coca-Cola Company', percentage: 10.8, dollars: 540.00 },
    { ticker: 'CVX', name: 'Chevron Corporation', percentage: 6.6, dollars: 330.00 },
    { ticker: 'OXY', name: 'Occidental Petroleum Corporation', percentage: 4.9, dollars: 245.00 },
    { ticker: 'MCO', name: 'Moody\'s Corporation', percentage: 4.4, dollars: 220.00 },
    { ticker: 'KHC', name: 'The Kraft Heinz Company', percentage: 4.3, dollars: 215.00 },
    { ticker: 'CB', name: 'Chubb Limited', percentage: 2.9, dollars: 145.00 },
    { ticker: 'DVA', name: 'DaVita Inc.', percentage: 2.2, dollars: 110.00 },
    { ticker: 'C', name: 'Citigroup Inc.', percentage: 1.3, dollars: 65.00 },
    { ticker: 'KR', name: 'The Kroger Co.', percentage: 1.1, dollars: 55.00 },
    { ticker: 'SIRI', name: 'Sirius XM Holdings Inc.', percentage: 0.9, dollars: 45.00 },
    { ticker: 'VRSN', name: 'VeriSign, Inc.', percentage: 0.9, dollars: 45.00 },
    { ticker: 'V', name: 'Visa Inc.', percentage: 0.9, dollars: 45.00 },
    { ticker: 'MA', name: 'Mastercard Incorporated', percentage: 0.7, dollars: 35.00 },
    { ticker: 'AMZN', name: 'Amazon.com, Inc.', percentage: 0.7, dollars: 35.00 },
    { ticker: 'AON', name: 'Aon plc', percentage: 0.5, dollars: 25.00 },
    { ticker: 'COF', name: 'Capital One Financial Corporation', percentage: 0.5, dollars: 25.00 },
    { ticker: 'NU', name: 'Nu Holdings Ltd.', percentage: 0.4, dollars: 20.00 },
    { ticker: 'ALLY', name: 'Ally Financial Inc.', percentage: 0.4, dollars: 20.00 },
    { ticker: 'TMUS', name: 'T-Mobile US, Inc.', percentage: 0.4, dollars: 20.00 },
    { ticker: 'CHTR', name: 'Charter Communications, Inc.', percentage: 0.3, dollars: 15.00 },
    { ticker: 'LPX', name: 'Louisiana-Pacific Corporation', percentage: 0.2, dollars: 10.00 },
    { ticker: 'FWON.K', name: 'Formula One Group', percentage: 0.2, dollars: 10.00 }
  ];

  // Only show top 10 holdings in Pie Chart for better visibility
  const topHoldings = allocations.slice(0, 10);
  const otherHoldings = {
    ticker: 'Others',
    name: 'Other Holdings',
    percentage: allocations.slice(10).reduce((sum, item) => sum + item.percentage, 0),
    dollars: allocations.slice(10).reduce((sum, item) => sum + item.dollars, 0)
  };

  const pieData = [...topHoldings, otherHoldings];

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#8884d8'];

  // Generate monthly projection data (assuming $1000 monthly addition)
  const monthlyProjection = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const baseAmount = 5000 + (month * 1000);
    return {
      month: `Month ${month}`,
      totalValue: baseAmount,
      monthlyContribution: 1000,
      portfolioGrowth: baseAmount
    };
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">$5000 Portfolio Distribution</h2>
      
      {/* Portfolio Table */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">#</th>
                <th className="px-4 py-2 text-left border-b">Ticker</th>
                <th className="px-4 py-2 text-left border-b">Company Name</th>
                <th className="px-4 py-2 text-right border-b">Percentage (%)</th>
                <th className="px-4 py-2 text-right border-b">Dollars ($)</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((stock, index) => (
                <tr key={stock.ticker} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border-b text-gray-500">{index + 1}</td>
                  <td className="px-4 py-2 border-b font-medium">{stock.ticker}</td>
                  <td className="px-4 py-2 border-b">{stock.name}</td>
                  <td className="px-4 py-2 text-right border-b">{stock.percentage}%</td>
                  <td className="px-4 py-2 text-right border-b">${stock.dollars.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border-t"></td>
                <td className="px-4 py-2 border-t font-medium" colSpan="2">Reserve USD</td>
                <td className="px-4 py-2 text-right border-t">1%</td>
                <td className="px-4 py-2 text-right border-t">$50.00</td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td className="px-4 py-2 border-t"></td>
                <td className="px-4 py-2 border-t" colSpan="2">Total</td>
                <td className="px-4 py-2 text-right border-t">100%</td>
                <td className="px-4 py-2 text-right border-t">$5,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Pie Chart */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Portfolio Distribution (Top 10 Holdings)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ ticker, percentage }) => `${ticker} (${percentage}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="dollars"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Top 10 Holdings by Value ($)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topHoldings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ticker" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="dollars" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart for Monthly Projection */}
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">12-Month Projection with $1000 Monthly Addition</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyProjection}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="portfolioGrowth" stroke="#8884d8" name="Total Portfolio Value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioAllocation;
