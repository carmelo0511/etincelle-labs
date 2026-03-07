export default function WorksLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav skeleton */}
      <div className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-5">
          <div className="h-[10px] w-[10px] animate-pulse rounded-full bg-border-light" />
          <div className="h-3 w-20 animate-pulse rounded bg-border-light" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="mx-auto max-w-[900px] px-8 pt-32">
        <div className="mx-auto max-w-[600px] space-y-4 text-center">
          <div className="mx-auto h-8 w-3/4 animate-pulse rounded bg-border-light" />
          <div className="mx-auto h-8 w-2/3 animate-pulse rounded bg-border-light" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="mx-auto max-w-[1000px] px-8 pt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div
                className="aspect-[4/3] animate-pulse rounded-sm bg-border-light"
                style={{ animationDelay: `${i * 150}ms` }}
              />
              <div className="flex items-center gap-3">
                <div className="h-4 w-24 animate-pulse rounded bg-border-light" />
                <div className="h-5 w-14 animate-pulse rounded-full bg-border-light" />
              </div>
              <div className="h-3 w-full animate-pulse rounded bg-border-light" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
