import { getAllGears } from "./_actions/gearActions";
import GearGrid from "./_components/GearGrid";
import SearchFilter from "./_components/SearchFilter";

const HomePage = async () => {
  const gears = await getAllGears();

  return (
    <main className="min-h-screen bg-white">
      <SearchFilter />
      <GearGrid gears={gears} />
    </main>
  );
};

export default HomePage;
