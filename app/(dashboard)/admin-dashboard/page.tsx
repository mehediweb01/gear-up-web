import { format } from "date-fns";
import { Users } from "lucide-react";
import { getAllUsers } from "../_actions/dashboardActions";
import UserStatusChange from "../_components/admin/UserStatusChange";

type TProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: Date;
};

const AdminDashboard = async () => {
  const result = await getAllUsers();

  const users: TProps[] = result.data;

  const stats = [{ label: "Total Users", value: users.length, icon: Users }];

  return (
    <div className="py-8">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8 mx-8 my-4">
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

      <div className="mx-8">
        {/* User Management */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              User Management
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{user.email}</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          user.status === "ACTIVE"
                            ? "bg-green-100 text-green-800"
                            : user.status === "SUSPENDS"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {format(new Date(user.createdAt), "yyyy-MM-dd")}
                    </td>
                    <td className="px-6 py-4">
                      <UserStatusChange
                        currentStatus={user.status}
                        userId={user.id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
