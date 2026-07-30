import { Mail, MapPin, Phone } from "lucide-react";

const ProfileInformation = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900 font-medium">john@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-gray-900 font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-900 font-medium">
                  Denver, Colorado, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Account Information
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Account Type</p>
              <p className="text-gray-900 font-medium">Customer</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Rentals</p>
              <p className="text-gray-900 font-medium">12</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Member Since</p>
              <p className="text-gray-900 font-medium">December 1, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
