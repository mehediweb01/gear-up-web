"use server";

export const getAllGears = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gear`, {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 12,
    },
  });

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
