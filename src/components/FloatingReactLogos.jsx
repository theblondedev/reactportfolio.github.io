import { SiReact } from "react-icons/si";

export default function FloatingReactLogos() {
  const logos = Array.from({ length: 12 });

  return (
    <div className="react-floating-layer pointer-events-none">
      {logos.map((_, i) => (
        <SiReact
          key={i}
          className={`react-logo react-logo-${i}`}
        />
      ))}
    </div>
  );
}
