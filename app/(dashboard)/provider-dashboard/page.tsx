/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCategories } from "@/app/(gear)/_actions/categoryActions";
import { Edit2, Trash2, TrendingUp, Users } from "lucide-react";
import { incomingOrders } from "../_actions/dashboardActions";
import AddGearModal from "../_components/provider/AddGearModal";
import ResendOrders from "../_components/provider/ResendOrders";

const ProviderDashboard = async () => {
  const result = await incomingOrders();
  const categories = await getAllCategories();

  const inventory = [
    {
      id: 1,
      name: "Mountain Tent Pro",
      category: "Camping",
      price: 45,
      available: 5,
      rented: 2,
      revenue: "$1,890",
    },
    {
      id: 2,
      name: "Carbon Kayak",
      category: "Water Sports",
      price: 85,
      available: 2,
      rented: 3,
      revenue: "$2,550",
    },
    {
      id: 3,
      name: "Mountain Bike Premium",
      category: "Cycling",
      price: 95,
      available: 1,
      rented: 4,
      revenue: "$3,800",
    },
  ];

  const resentOrders = result.data.filter(
    (order: any) => order.status !== "RETURNED",
  );

  const orders = resentOrders;

  const stats = [
    { label: "Gear Items", value: "12", icon: TrendingUp, color: "purple" },
    { label: "New Orders", value: orders.length, icon: Users, color: "orange" },
  ];

  return (
    <div className="mx-8 py-8">
      {/* Stats */}
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
                <Icon
                  size={24}
                  className={`opacity-20 text-${stat.color}-600`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Inventory */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Inventory Management
            </h2>
            <AddGearModal categories={categories.data} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Gear Item
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Available
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Rented
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      ${item.price}/day
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {item.available}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {item.rented}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.revenue}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ResendOrders orders={orders} />
      </div>
    </div>
  );
};

export default ProviderDashboard;
