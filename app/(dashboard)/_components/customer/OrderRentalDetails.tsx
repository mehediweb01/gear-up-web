import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

type Props = {
  startDate: string;
  endDate: string;
  quantity: number;
  gear: { pricePerDay: number };
};

const OrderRentalDetails = ({ order }: { order: Props }) => {
  const rentalDays = Math.ceil(
    (new Date(order.endDate).getTime() - new Date(order.startDate).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar size={20} />
            Rental Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Start Date
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {format(order.startDate, "dd MMM yyyy")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                End Date
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {format(order.endDate, "dd MMM yyyy")}
              </p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rental Duration
            </p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {rentalDays} days
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Quantity
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {order.quantity} units
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Price per Day
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ${order.gear.pricePerDay}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderRentalDetails;
