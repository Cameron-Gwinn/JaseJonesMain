interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  subline?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  headline,
  subline,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-cream" : "text-charcoal";
  const eyebrowColor = light ? "text-cream/50" : "text-taupe";
  const sublineColor = light ? "text-cream/60" : "text-charcoal/60";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p className={`text-xs tracking-widest uppercase font-sans ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`}>
        {headline}
      </h2>
      {subline && (
        <p className={`text-base md:text-lg leading-relaxed max-w-xl ${sublineColor}`}>
          {subline}
        </p>
      )}
    </div>
  );
}
