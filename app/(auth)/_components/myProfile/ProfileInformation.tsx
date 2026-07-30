import { INavbarProps } from "@/components/shared/navbar/Navbar";
import { format } from "date-fns";
import { Mail, MapPin, Phone, User2 } from "lucide-react";

const ProfileInformation = ({ user }: INavbarProps) => {
  const year = format(new Date(user.data.createdAt), "yyyy");
  const month = format(new Date(user.data.createdAt), "MMM");
  const date = format(new Date(user.data.createdAt), "dd");

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Mail size={20} className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-gray-900 font-medium">{user.data.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="text-gray-900 font-medium">{user.data.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {user.data.address && (
            <>
              <MapPin size={20} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-900 font-medium">{user.data.address}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <User2 size={20} className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-600 mb-1">Member Since</p>
            <p className="text-gray-900 font-medium">
              {month} {date}, {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
