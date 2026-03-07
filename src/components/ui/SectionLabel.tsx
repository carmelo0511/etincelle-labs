export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
      {children}
    </span>
  );
}
