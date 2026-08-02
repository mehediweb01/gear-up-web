import { getAllCategories } from "@/app/(gear)/_actions/categoryActions";
import { ListTree, Users } from "lucide-react";
import { getAllUsers } from "../_actions/dashboardActions";
import CategoryCard from "../_components/admin/CategoryCard";
import CreateCategoryModal from "../_components/admin/CreateCategoryModal";
import UserCard from "../_components/admin/UserCard";
import { ICategoryProps } from "../_types/categoryTypes";
import { TUsersProps } from "../_types/usersTypes";

const AdminDashboard = async () => {
  const result = await getAllUsers();
  const categories: ICategoryProps = await getAllCategories();

  const users: TUsersProps[] = result.data;

  const stats = [
    { label: "Total Users", value: users.length, icon: Users },
    { label: "Total Category", value: categories.data.length, icon: ListTree },
  ];

  return (
    <div className="py-8 mx-8">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8 my-4">
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

      <div className="mb-4">
        <CreateCategoryModal />
      </div>

      {/* categories */}
      <div className="my-4 mb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {categories.data.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

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
                <UserCard key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
