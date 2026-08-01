/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCategories } from "@/app/(gear)/_actions/categoryActions";
import { TrendingUp, Users } from "lucide-react";
import { getProviderGears, incomingOrders } from "../_actions/dashboardActions";
import AddGearModal from "../_components/provider/AddGearModal";
import GearActionButton from "../_components/provider/GearActionButton";
import ResendOrders from "../_components/provider/ResendOrders";
import { IProviderGear } from "../_types/gearTypes";

const ProviderDashboard = async () => {
  const result = await incomingOrders();
  const categories = await getAllCategories();

  const myGears = await getProviderGears();
  const gears: IProviderGear[] = myGears.data;

  const resentOrders = result.data.filter(
    (order: any) => order.status !== "RETURNED",
  );

  const orders = resentOrders;

  const stats = [
    {
      label: "Gear Items",
      value: gears.length,
      icon: TrendingUp,
      color: "purple",
    },
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
        {/* gears */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Gear Management
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
                {gears.map((gear) => {
                  const rented = gear._count?.rentals;

                  const revenue = gear.rentals.reduce(
                    (total: number, rental) => total + rental.totalPrice,
                    0,
                  );

                  return (
                    <tr
                      key={gear.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {gear.title}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        ${gear.pricePerDay}/day
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {gear.isAvailable ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {rented}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {revenue}
                      </td>
                      <td className="px-6 py-4">
                        <GearActionButton
                          gear={gear}
                          categories={categories.data}
                        />
                      </td>
                    </tr>
                  );
                })}
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
