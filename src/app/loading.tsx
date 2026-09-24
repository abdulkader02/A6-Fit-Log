const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 py-8 text-white sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="skeleton h-10 w-56 bg-[#20232b]" />

        <div className="skeleton mt-3 h-3 w-80 bg-[#20232b]" />

        {/* Workout Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#20232b] bg-[#121418] p-4"
            >
              <div className="skeleton h-48 w-full rounded-xl bg-[#20232b]" />

              <div className="skeleton mt-4 h-5 w-40 bg-[#20232b]" />

              <div className="skeleton mt-2 h-3 w-28 bg-[#20232b]" />

              <div className="mt-4 flex gap-3">
                <div className="skeleton h-3 w-16 bg-[#20232b]" />
                <div className="skeleton h-3 w-16 bg-[#20232b]" />
                <div className="skeleton h-3 w-12 bg-[#20232b]" />
              </div>

              <div className="skeleton mt-5 h-10 w-full rounded-lg bg-[#20232b]" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Loading;