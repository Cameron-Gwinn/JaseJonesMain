import Link from "next/link";

interface BrandButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "light";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function BrandButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
}: BrandButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe";

  const variants = {
    primary:
      "bg-charcoal text-cream px-8 py-3.5 hover:bg-charcoal/80",
    outline:
      "border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-cream",
    ghost:
      "text-charcoal underline-offset-4 hover:underline px-0 py-0",
    light:
      "border border-cream text-cream px-8 py-3.5 hover:bg-cream hover:text-charcoal",
  };

  const classes = `${base} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
