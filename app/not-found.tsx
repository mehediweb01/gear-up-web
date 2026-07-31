import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
