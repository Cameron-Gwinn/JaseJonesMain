export default function Marquee() {
  const items = [
    "Interior Design",
    "✦",
    "New Construction",
    "✦",
    "Furnishings",
    "✦",
    "Home Goods",
    "✦",
    "Dallas, Texas",
    "✦",
    "Est. 2005",
    "✦",
    "Fabrics & Textiles",
    "✦",
    "Crafted with Intention",
    "✦",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-charcoal py-4 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-xs tracking-widest uppercase px-6 ${
              item === "✦" ? "text-taupe" : "text-cream/60"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
