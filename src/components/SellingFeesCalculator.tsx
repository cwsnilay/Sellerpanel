import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const SellingFeesCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Welcome Plan');
  const [calculation, setCalculation] = useState({
    purchasePrice: 0,
    sellingPrice: 0,
    selectedPlan: 'Welcome Plan',
    planFee: 1.00,
    transactionFees: 0,
    siteCommission: 0,
    profit: 0
  });

  const calculateFees = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const selling = parseFloat(sellingPrice) || 0;
    
    const planFee = 1.00; // Fixed plan fee
    const transactionFeeRate = 0.01; // 1%
    const siteCommissionRate = 0.01; // 1%
    
    const transactionFees = selling * transactionFeeRate;
    const siteCommission = selling * siteCommissionRate;
    const totalFees = planFee + transactionFees + siteCommission;
    const profit = selling - purchase - totalFees;

    setCalculation({
      purchasePrice: purchase,
      sellingPrice: selling,
      selectedPlan,
      planFee,
      transactionFees,
      siteCommission,
      profit
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Calculator size={24} className="text-gray-700" />
        <h2 className="text-2xl font-bold text-gray-900">Selling Fees Calculator</h2>
      </div>

      {/* Calculator Form */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Purchase Price
            </label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter purchase price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Selling Price
            </label>
            <input
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter selling price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Plan
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Welcome Plan">Welcome Plan</option>
              <option value="Basic Plan">Basic Plan</option>
              <option value="Premium Plan">Premium Plan</option>
              <option value="Enterprise Plan">Enterprise Plan</option>
            </select>
          </div>

          <button
            onClick={calculateFees}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Calculate
          </button>
        </div>
      </div>

      {/* Calculation Results */}
      {(purchasePrice || sellingPrice) && (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Selling Fees Calculation</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Product Purchase Price</span>
              <span className="font-medium">₹{calculation.purchasePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Product Selling Price</span>
              <span className="font-medium">₹{calculation.sellingPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Selected Plan</span>
              <span className="font-medium">{calculation.selectedPlan}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Plan Fee (One Time)</span>
              <span className="font-medium">₹{calculation.planFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Transaction Fees (1.00%)</span>
              <span className="font-medium">₹{calculation.transactionFees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Site Commission (1.00%)</span>
              <span className="font-medium">₹{calculation.siteCommission.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-green-600">Profit</span>
                <span className="text-lg font-bold text-green-600">₹{calculation.profit.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellingFeesCalculator;