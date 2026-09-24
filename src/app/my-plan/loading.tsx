const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 py-8 text-white sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Header Skeleton */}
        <div className="mb-6">
          <div className="skeleton h-10 w-40 bg-[#20232b]" />

          <div className="skeleton mt-2 h-3 w-80 bg-[#20232b]" />
        </div>

        {/* Metrics Skeleton */}
        <div className="grid grid-cols-3 divide-x divide-[#20232b] rounded-2xl border border-[#20232b] bg-[#121418] p-4 sm:p-6">

          <div className="pr-3 sm:pr-4">
            <div className="skeleton h-3 w-16 bg-[#20232b]" />
            <div className="skeleton mt-3 h-8 w-10 bg-[#20232b]" />
          </div>

          <div className="px-3 sm:px-4">
            <div className="skeleton h-3 w-16 bg-[#20232b]" />
            <div className="skeleton mt-3 h-8 w-10 bg-[#20232b]" />
          </div>

          <div className="pl-3 sm:pl-4">
            <div className="skeleton h-3 w-16 bg-[#20232b]" />
            <div className="skeleton mt-3 h-8 w-10 bg-[#20232b]" />
          </div>

        </div>

        {/* Tabs Skeleton */}
        <div className="mt-8 flex w-full gap-2 rounded-xl border border-[#20232b] bg-[#121418] p-2 sm:w-fit">
          <div className="skeleton h-9 w-28 rounded-lg bg-[#20232b]" />
          <div className="skeleton h-9 w-20 rounded-lg bg-[#20232b]" />
        </div>

        {/* Workout Card Skeletons */}
        <div className="mt-6 flex flex-col gap-4">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                flex w-full flex-col gap-4
                rounded-2xl border border-[#20232b]
                bg-[#121418] p-4
                sm:p-5
                md:flex-row md:items-center md:gap-5
              "
            >
              {/* Image */}
              <div className="skeleton h-48 w-full shrink-0 rounded-xl bg-[#20232b] sm:h-52 md:h-24 md:w-32 lg:h-28 lg:w-40" />

              {/* Content */}
              <div className="flex-1">
                <div className="skeleton h-5 w-48 bg-[#20232b]" />
                <div className="skeleton mt-2 h-3 w-28 bg-[#20232b]" />

                <div className="mt-4 flex gap-4">
                  <div className="skeleton h-3 w-16 bg-[#20232b]" />
                  <div className="skeleton h-3 w-16 bg-[#20232b]" />
                  <div className="skeleton h-3 w-10 bg-[#20232b]" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex w-full gap-2 md:w-auto">
                <div className="skeleton h-10 w-28 bg-[#20232b]" />
                <div className="skeleton h-10 w-28 bg-[#20232b]" />
                <div className="skeleton h-10 w-10 bg-[#20232b]" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Loading;