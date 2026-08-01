import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  brand: string;
  categories: { name: string };
};

const OrderGearCard = ({
  order,
}: {
  order: {
    gear: Props;
  };
}) => {
  return (
    <>
      <Card className="overflow-hidden">
        <div className="aspect-video relative bg-gray-200 dark:bg-gray-800">
          <Image
            src={order.gear.image}
            alt={order.gear.title}
            unoptimized
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {order.gear.categories.name}
          </div>
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {order.gear.brand}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {order.gear.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {order.gear.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderGearCard;
