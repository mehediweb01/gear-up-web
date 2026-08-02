import { format } from "date-fns";
import { TUsersProps } from "../../_types/usersTypes";
import UserStatusChange from "./UserStatusChange";

const UserCard = ({ user }: { user: TUsersProps }) => {
  return (
    <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
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
        <UserStatusChange currentStatus={user.status} userId={user.id} />
      </td>
    </tr>
  );
};

export default UserCard;
