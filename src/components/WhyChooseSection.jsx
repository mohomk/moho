import { Code2, Palette, Smartphone, Search, Globe, Users, Cpu, HeartHandshake } from "lucide-react";

const FEATURE_META = [
  { icon: Code2, num: "01" },
  { icon: Palette, num: "02" },
  { icon: Smartphone, num: "03" },
  { icon: Search, num: "04" },
  { icon: Globe, num: "05" },
  { icon: Users, num: "06" },
  { icon: Cpu, num: "07" },
  { icon: HeartHandshake, num: "08" },
];

export default function WhyChooseSection({ dict }) {
  const FEATURES = FEATURE_META.map((meta, i) => ({ ...meta, ...dict.items[i] }))

  return (
    <section id="why-us" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16" data-reveal>
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {dict.eyebrow}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-4">
            {dict.title}
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.num}
              data-reveal
              data-spotlight
              style={{ '--delay': `${(i % 4) * 100}ms` }}
              className="group relative border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* Spotlight following the pointer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.12), transparent 60%)" }}
              />
              {/* Scanline hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" style={{ top: "50%" }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground/50">{f.num}</span>
                </div>
                <h3 className="font-heading font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}