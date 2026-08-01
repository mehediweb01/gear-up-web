import { getSingleOrder } from "@/app/(dashboard)/_actions/dashboardActions";
import OrderDetailsHeader from "@/app/(dashboard)/_components/customer/OrderDetailsHeader";
import OrderGearCard from "@/app/(dashboard)/_components/customer/OrderGearCard";
import OrderRentalDetails from "@/app/(dashboard)/_components/customer/OrderRentalDetails";
import OrderStatusCard from "@/app/(dashboard)/_components/customer/OrderStatusCard";
import OrderSummary from "@/app/(dashboard)/_components/customer/OrderSummary";
import ProviderDetails from "@/app/(dashboard)/_components/customer/ProviderDetails";

const OrderDetailsPage = async ({
  params,
}: {
  params: { orderId: string };
}) => {
  const { orderId } = await params;

  const result = await getSingleOrder(orderId);
  const order = result.data;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <OrderDetailsHeader orderId={order.id} status={order.status} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <OrderGearCard order={order} />
            <OrderRentalDetails order={order} />
            <ProviderDetails order={order} />
          </div>

          <div className="space-y-6">
            <OrderSummary totalPrice={order.totalPrice} />
            <OrderStatusCard
              createdAt={order.createdAt}
              updatedAt={order.updatedAt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
