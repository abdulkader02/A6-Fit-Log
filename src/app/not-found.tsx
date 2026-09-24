import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0c0d10] px-4 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-black text-[#ccff00]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-[#787c87]">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 rounded-full border-none bg-[#ccff00] px-6 text-black hover:bg-[#b8e600]"
        >
          Go to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;