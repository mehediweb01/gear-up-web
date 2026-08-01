"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { createOrder } from "../_actions/orderActions";

const OrderForm = ({
  gearId,
  user,
}: {
  gearId: string;
  user: {
    data: {
      name: string;
      email: string;
      role: string;
      status: string;
    };
  };
}) => {
  const payload = {
    gearId,
    user,
  };

  const [state, action, pending] = useActionState(
    createOrder.bind(null, payload),
    false,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Successfully logged in");
    }

    if (!state.success) {
      toast.error(state.message || "Something went wrong");
    }
  }, [state]);

  return (
    <form className="space-y-3 mb-6" action={action}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Check-in Date
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input name="startDate" type="date" className="flex-1 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rental days
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input
            type="number"
            name="rentalDays"
            className="flex-1 outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
          <input
            type="number"
            name="quantity"
            className="flex-1 outline-none"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          {pending ? "Loading..." : "Order now"}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
