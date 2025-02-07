import React from 'react';

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

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">$5000 Portfolio Distribution</h2>
      <div className="border rounded-lg overflow-hidden">
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
    </div>
  );
};

export default PortfolioAllocation;