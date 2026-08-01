import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Package, Phone } from "lucide-react";

type Props = {
  order: {
    gear: {
      provider: {
        name: string;
        email: string;
        phone: string;
        address: string;
      };
    };
  };
};

const ProviderDetails = ({ order }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package size={20} />
            Provider Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Provider Name
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {order.gear.provider.name}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Mail className="text-gray-400 mt-1" size={18} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Email
                </p>
                <a
                  href={`mailto:${order.gear.provider.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {order.gear.provider.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-gray-400 mt-1" size={18} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Phone
                </p>
                <a
                  href={`tel:${order.gear.provider.phone}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {order.gear.provider.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 pt-2">
            <MapPin className="text-gray-400 mt-1" size={18} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Location
              </p>
              <p className="text-gray-900 dark:text-white">
                {order.gear.provider.address}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProviderDetails;
