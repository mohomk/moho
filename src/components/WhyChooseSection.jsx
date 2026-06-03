import { Code2, Palette, Smartphone, Search, Globe, Users, Cpu, HeartHandshake } from "lucide-react";

const FEATURES = [
  { icon: Code2, title: "Expertise", desc: "Our team of seasoned developers brings years of experience and cutting-edge skills. From front-end design to back-end functionality, we've got you covered.", num: "01" },
  { icon: Palette, title: "Custom Solutions", desc: "One-size-fits-all doesn't cut it. We specialize in creating bespoke websites that reflect your brand identity and goals.", num: "02" },
  { icon: Smartphone, title: "Responsive Design", desc: "In today's mobile-first era, your website needs to shine on all devices. We ensure your site is beautiful and fully responsive.", num: "03" },
  { icon: Search, title: "SEO Optimization", desc: "What good is a website if it can't be found? We implement SEO best practices to boost your site's visibility and ranking.", num: "04" },
  { icon: Globe, title: "Web Application Development", desc: "From SaaS platforms to enterprise systems, we create robust web applications designed for performance and usability.", num: "05" },
  { icon: Users, title: "User-Centric Approach", desc: "Your users matter. We create user-friendly, intuitive interfaces that keep visitors engaged and coming back.", num: "06" },
  { icon: Cpu, title: "Cutting-Edge Technology", desc: "From the latest frameworks to innovative development techniques, we stay ahead of the curve for top-notch solutions.", num: "07" },
  { icon: HeartHandshake, title: "Client-Centric Philosophy", desc: "Your success is our success. We pride ourselves on clear communication, timely delivery, and exceptional support.", num: "08" },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            // Why Choose Moho
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-4">
            Built Different
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Eight pillars of engineering excellence that set us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="group relative border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
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