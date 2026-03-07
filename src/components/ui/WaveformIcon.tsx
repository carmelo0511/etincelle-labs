export function WaveformIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="15.5" width="1.5" height="5.5" rx="0.75" fill="currentColor" />
      <rect x="2.8" y="12" width="1.5" height="9" rx="0.75" fill="currentColor" />
      <rect x="5.6" y="8" width="1.5" height="13" rx="0.75" fill="currentColor" />
      <rect x="8.4" y="4" width="1.5" height="17" rx="0.75" fill="currentColor" />
      <rect x="11.2" y="1" width="1.5" height="20" rx="0.75" fill="currentColor" />
      <rect x="14" y="3" width="1.5" height="18" rx="0.75" fill="currentColor" />
      <rect x="16.8" y="7.5" width="1.5" height="13.5" rx="0.75" fill="currentColor" />
      <rect x="19.6" y="11.5" width="1.5" height="9.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}
