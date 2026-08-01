export const getAllCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/category`, {
    method: "GET",
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 12,
    },
  });

  const result = await res.json();

  return result;
};
