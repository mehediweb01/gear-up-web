"use server";

export const getAllGears = async ({
  searchTerm,
  category,
  minPrice,
  maxPrice,
}: {
  searchTerm?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
}) => {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.set("searchTerm", searchTerm);
  }

  if (category) {
    params.set("category", category);
  }

  if (minPrice) {
    params.set("minPrice", minPrice);
  }

  if (maxPrice) {
    params.set("maxPrice", maxPrice);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/gear?${params.toString()}`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 12,
      },
    },
  );

  const result = await res.json();

  return result;
};

export const getSingleGearDetails = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gear/${id}`, {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 12,
    },
  });

  const result = await res.json();

  return result;
};
