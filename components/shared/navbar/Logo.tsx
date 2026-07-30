import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">GU</span>
      </div>
      <span className="font-bold text-lg text-gray-900">GearUp</span>
    </Link>
  );
};

export default Logo;
