/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from "date-fns";
import UpdateStatus from "./UpdateStatus";

const ResendOrders = ({ orders }: { orders: any }) => {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        </div>
        <div className="space-y-3 p-6">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-medium text-gray-900 text-sm">
                  {order.gear.title}
                </p>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    order.status === "PLACED"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "RETURNED"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                {order.customer.name}
              </p>
              <p className="text-xs text-gray-500">
                {format(order.createdAt, "dd MMM yyyy")}
              </p>
              <UpdateStatus order={order} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResendOrders;
