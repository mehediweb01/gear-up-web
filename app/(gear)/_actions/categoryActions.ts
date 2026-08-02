export const getAllCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/category`, {
    method: "GET",
  });

  const result = await res.json();

  return result;
};
