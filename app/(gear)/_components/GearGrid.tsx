"use client";

import { GearsProps } from "../_types/gearTypes";
import GearCard from "./GearCard";

const GearGrid = ({ gears }: GearsProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Gear</h1>
        <p className="text-gray-600">
          Discover and rent premium gear for your next adventure
        </p>
      </div>

      {gears.data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gears.data.map((item) => {
            const totalRating = item?.reviews?.reduce(
              (acc, curr) => acc + curr.rating,
              0,
            );
            const rating = totalRating / item.reviews.length;

            return <GearCard key={item.id} item={item} rating={rating} />;
          })}
        </div>
      )}

      {gears.data.length === 0 && (
        <div className="text-center font-semibold text-xl tracking-[2px]">
          No Available Gear Item
        </div>
      )}
    </div>
  );
};

export default GearGrid;
