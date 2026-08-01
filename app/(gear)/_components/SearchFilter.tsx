"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { ICategory } from "../_types/categoryTypes";

const SearchFilter = ({ categories }: { categories: ICategory }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const debouncedRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchTerm = searchParams.get("searchTerm")
    ? searchParams.get("searchTerm")
    : "";

  const handleChange = (value: string) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      const params = new URLSearchParams();

      if (value) {
        params.set("searchTerm", value);
      } else {
        params.delete("searchTerm");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);

    if (value === "") {
      params.delete("category");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePriceRange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete("minPrice");
      params.delete("maxPrice");
      router.replace(`${pathname}?${params.toString()}`);
      return;
    }

    const [minPrice, maxPrice] = value.split("-");

    params.set("minPrice", minPrice);

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              defaultValue={searchTerm as string}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search for gear... (kayak, tent, bike, etc.)"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              onChange={(e) => handleCategory(e.target.value)}
              value={searchParams.get("category") || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.data.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <select
              onChange={(e) => handlePriceRange(e.target.value)}
              value={
                searchParams.get("minPrice")
                  ? `${searchParams.get("minPrice")}-${searchParams.get("maxPrice") || ""}`
                  : ""
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
            >
              <option value="">All Prices</option>
              <option value="0-25">$0 - $25</option>
              <option value="25-50">$25 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-">$100+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
