import { getSinglePayment } from "@/app/(payment)/_actions/paymentActions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Eye, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccessPage = async ({
  params,
}: {
  params: { paymentId: string };
}) => {
  const payId = await params;

  const result = await getSinglePayment(payId.paymentId as string);
  const paymentData = result.data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const rentalDays = Math.ceil(
    (new Date(paymentData.rentals.endDate).getTime() -
      new Date(paymentData.rentals.startDate).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2
              className="w-20 h-20 text-green-600"
              strokeWidth={1.5}
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">Your rental order has been confirmed</p>
        </div>

        {/* Main Card */}
        <Card className="mb-6 shadow-lg border-0">
          <CardHeader className="bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle>Order Confirmation</CardTitle>
            <CardDescription className="text-green-50">
              Reference ID: {paymentData.id}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {/* Payment Summary */}
            <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                <p className="text-3xl font-bold text-gray-900">
                  {paymentData.amount}৳
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                <p className="text-lg font-semibold text-gray-900">Stripe</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <p className="font-semibold text-green-700">
                    {paymentData.status}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                <p className="text-gray-900">
                  {formatDate(paymentData.paidAt)}
                </p>
              </div>
            </div>

            {/* Rental Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rental Details
              </h3>
              <div className="flex gap-4">
                {/* Gear Image */}
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={paymentData.rentals.gear.image}
                    alt={paymentData.rentals.gear.title}
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gear Info */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {paymentData.rentals.gear.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Brand: {paymentData.rentals.gear.brand}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Quantity</p>
                      <p className="font-semibold text-gray-900">
                        {paymentData.rentals.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Per Day</p>
                      <p className="font-semibold text-gray-900">
                        {paymentData.rentals.gear.pricePerDay}৳
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Days</p>
                      <p className="font-semibold text-gray-900">
                        {rentalDays}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Period */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Rental Period
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Start Date</p>
                  <p className="font-semibold text-gray-900">
                    {formatDate(paymentData.rentals.startDate)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">End Date</p>
                  <p className="font-semibold text-gray-900">
                    {formatDate(paymentData.rentals.endDate)}
                  </p>
                </div>
              </div>
            </div>

            {/* Provider Info */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Provider Information
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">Name:</span>{" "}
                  {paymentData.rentals.gear.provider.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  {paymentData.rentals.gear.provider.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">Phone:</span>{" "}
                  {paymentData.rentals.gear.provider.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">Location:</span>{" "}
                  {paymentData.rentals.gear.provider.address}
                </p>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Transaction Details
              </h3>
              <p className="text-xs text-gray-600 break-all">
                <span className="font-medium text-gray-900">
                  Transaction ID:
                </span>{" "}
                {paymentData.transactionId}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="flex-1">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2"
            >
              <Eye size={18} />
              View My Rentals
            </Link>
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-600 mt-6">
          Questions? Contact support or reach out to the provider directly for
          pickup/delivery details.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
