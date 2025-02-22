
import React from 'react';
import { Button } from '@/components/ui/button';

interface KNETPaymentProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export function KNETPayment({ amount, onSuccess, onCancel }: KNETPaymentProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">KNET Payment Demo</h3>
        <p className="text-gray-600">Amount: {amount} KD</p>
      </div>
      
      <div className="space-y-4">
        <div className="border rounded p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="**** **** **** ****"
              disabled
              value="4000 0000 0000 0000"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
                disabled
                value="12/25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="***"
                disabled
                value="123"
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button 
            onClick={onSuccess}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Pay {amount} KD
          </Button>
          <Button 
            onClick={onCancel}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
