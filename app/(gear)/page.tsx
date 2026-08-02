import { getAllCategories } from "./_actions/categoryActions";
import { getAllGears } from "./_actions/gearActions";
import GearGrid from "./_components/GearGrid";
import SearchFilter from "./_components/SearchFilter";

type Props = {
  searchParams: Promise<{
    brand?: string;
    searchTerm?: string;
    minPrice?: string;
    maxPrice?: string;
    category?: string;
  }>;
};

export const revalidate = 0;

const HomePage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const query = {
    searchTerm: params.searchTerm,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    category: params.category,
  };

  const gears = await getAllGears(query);
  const categories = await getAllCategories();

  return (
    <main className="min-h-screen bg-white">
      <SearchFilter categories={categories} />
      <GearGrid gears={gears} />
    </main>
  );
};

export default HomePage;
