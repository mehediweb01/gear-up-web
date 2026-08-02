/* eslint-disable @typescript-eslint/no-explicit-any */
import { format } from "date-fns";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getUserOrders } from "../_actions/dashboardActions";

const CustomerDashboard = async () => {
  const result = await getUserOrders();

  const orders: any = result.data;

  const stats = [
    { label: "Total Rentals", value: orders.length, icon: ShoppingCart },
  ];

  return (
    <div className="mx-8 py-8">
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <Icon size={24} className="text-blue-600 opacity-20" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Rentals
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Gear
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {order.gear.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {format(new Date(order.createdAt), "yyyy-MM-dd")}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "PAID"
                          ? "bg-green-100 text-green-800"
                          : order.status === "CONFIRMED"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {order.totalPrice}৳
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      href={`/dashboard/order/${order.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
