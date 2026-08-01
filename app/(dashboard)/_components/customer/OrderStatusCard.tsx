import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const OrderStatusCard = ({
  createdAt,
  updatedAt,
}: {
  createdAt: string;
  updatedAt: string;
}) => {
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Order Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Order Placed
            </p>
            <p className="text-gray-900 dark:text-white font-medium">
              {format(createdAt, "dd MMM yyyy")} at {formatTime(createdAt)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Last Updated
            </p>
            <p className="text-gray-900 dark:text-white font-medium">
              {format(updatedAt, "dd MMM yyyy")} at {formatTime(updatedAt)}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mt-4">
            <p className="text-sm text-green-700 dark:text-green-400">
              Payment has been received and confirmed.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderStatusCard;
