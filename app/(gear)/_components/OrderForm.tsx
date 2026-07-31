const OrderForm = () => {
  return (
    <form className="space-y-3 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Check-in Date
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input type="date" className="flex-1 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rental days
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input type="number" className="flex-1 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input type="number" className="flex-1 outline-none" />
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue to Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
