"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GearsProps } from "../_types/gearTypes";

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

            return (
              <Link key={item.id} href={`/gear/${item.id}`}>
                <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <Image
                    src={item.image}
                    height={400}
                    width={500}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    unoptimized
                  />

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.categories.name}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                      {item.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => {
                          return (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          );
                        })}
                        <span>{rating || 0}</span>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          ${item.pricePerDay}
                        </span>
                        <span className="text-xs text-gray-600">/day</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600">
                          stock: {item.stock}
                        </span>
                      </div>
                      <button className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors cursor-pointer">
                        Rent
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
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
