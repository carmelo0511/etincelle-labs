export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing logo dot */}
        <div className="h-3 w-3 animate-pulse rounded-full bg-text-primary" />

        {/* Skeleton shimmer bars — mimics the brand's vertical bar motif */}
        <div className="flex items-end gap-1.5">
          {[20, 28, 36, 32, 24, 16].map((h, i) => (
            <div
              key={i}
              className="w-1 animate-pulse rounded-full bg-border-light"
              style={{
                height: h,
                animationDelay: `${i * 120}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
