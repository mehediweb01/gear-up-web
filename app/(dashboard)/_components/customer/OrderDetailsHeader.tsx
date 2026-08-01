import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

const OrderDetailsHeader = ({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) => {
  return (
    <>
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
        >
          <ArrowLeft size={18} />
          Back to Orders
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Order Details
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Order ID: {orderId}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-green-700 dark:text-green-400 font-semibold">
              {status}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsHeader;
