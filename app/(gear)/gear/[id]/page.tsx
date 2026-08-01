import { getMe } from "@/service/getMe";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getSingleGearDetails } from "../../_actions/gearActions";
import OrderForm from "../../_components/OrderForm";
import Review from "../../_components/Review";
import { TGear } from "../../_types/gearTypes";

type IGear = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TGear;
};

const GearDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const gear: IGear = await getSingleGearDetails(id);
  const user = await getMe();

  const totalRating = gear?.data?.reviews?.reduce(
    (acc, curr) => acc + curr.rating,
    0,
  );
  const rating = totalRating / gear?.data?.reviews?.length;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Browse Gear
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{gear.data.title}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left - Image */}
          <div>
            <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center aspect-square">
              <Image
                src={gear.data.image}
                alt={gear.data.title}
                height={500}
                width={500}
                unoptimized
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right - Details */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {gear?.data?.categories?.name}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {gear.data.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(rating || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">{rating || 0}</span>
            </div>

            {/* Provider Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h1 className="font-bold text-xl tracking-[2px]">
                {" "}
                Provider Info:{" "}
              </h1>
              <div>
                <p className="font-medium text-gray-900">
                  Name: {gear.data.provider.name}
                </p>
                <p className="font-medium text-gray-900">
                  Phone: {gear.data.provider.phone}
                </p>
                <p className="font-medium text-gray-900">
                  Address: {gear.data.provider.address}
                </p>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-b border-t border-gray-200 py-6 mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${gear.data.pricePerDay}
                </span>
                <span className="text-gray-600">/day</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {gear.data.isAvailable ? "Available" : "Unavailable"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Stock: {gear.data.stock}
              </p>

              <OrderForm gearId={gear.data.id} user={user} />
            </div>

            {/* Description */}
            {gear.data.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  About this gear
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {gear?.data?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <Review reviews={gear?.data?.reviews} />
      </div>
    </main>
  );
};

export default GearDetails;
