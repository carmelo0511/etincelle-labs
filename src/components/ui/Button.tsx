import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "outline" | "inverse";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const variantStyles = {
  primary:
    "bg-navy text-text-inverse hover:bg-charcoal",
  outline:
    "border border-text-primary text-text-primary hover:bg-text-primary hover:text-white",
  inverse:
    "bg-cream text-navy hover:bg-white",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
