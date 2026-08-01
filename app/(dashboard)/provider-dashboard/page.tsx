import {
  DollarSign,
  Edit2,
  Package,
  Plus,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const ProviderDashboard = () => {
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

  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      gear: "Mountain Tent Pro",
      status: "Pending Pickup",
      date: "Dec 20, 2024",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      gear: "Carbon Kayak",
      status: "In Rental",
      date: "Dec 18, 2024",
    },
    {
      id: "ORD003",
      customer: "Bob Wilson",
      gear: "Mountain Bike",
      status: "Pending Return",
      date: "Dec 15, 2024",
    },
  ];

  const stats = [
    {
      label: "Monthly Revenue",
      value: "$8,240",
      icon: DollarSign,
      color: "green",
    },
    { label: "Active Rentals", value: "9", icon: Package, color: "blue" },
    { label: "Gear Items", value: "12", icon: TrendingUp, color: "purple" },
    { label: "New Bookings", value: "5", icon: Users, color: "orange" },
  ];

  return (
    <>
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
            <Link
              href="/dashboard/provider/add-gear"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <Plus size={16} /> Add Gear
            </Link>
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

        {/* Pending Orders */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h2>
          </div>
          <div className="space-y-3 p-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-gray-900 text-sm">
                    {order.gear}
                  </p>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.status === "Pending Pickup"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "In Rental"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{order.customer}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
