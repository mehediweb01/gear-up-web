import { getMe } from "@/service/getMe";
import { getMonth, getYear } from "date-fns";
import { Edit } from "lucide-react";
import LogOutBtn from "../_components/myProfile/LogOut";
import ProfileInformation from "../_components/myProfile/ProfileInformation";

const MyProfile = async () => {
  const user = await getMe();

  const year = getYear(new Date(user.data.createdAt));
  const month = getMonth(new Date(user.data.createdAt));

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-linear-to-r from-blue-500 to-blue-600 h-32" />

          {/* Profile Content */}
          <div className="px-6 pb-6">
            {/* Avatar & Name */}
            <div className="flex items-start justify-between -mt-16 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-4xl">
                  👤
                </div>
                <div className="pt-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {user.data.name}
                  </h2>
                  <p className="text-white/80">
                    {user.data.role.toLowerCase()} • Member since {month} -{" "}
                    {year}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                <Edit size={18} /> Edit Profile
              </button>
            </div>

            <ProfileInformation />

            <div className="border-t border-gray-200 mt-8 pt-8">
              <LogOutBtn />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
