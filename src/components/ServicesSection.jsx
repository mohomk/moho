import { Globe, Code, Workflow, Database, Wrench, BarChart3 } from 'lucide-react'

const SERVICES = [
  {
    icon: Workflow,
    title: "ERP Solutions",
    desc: "We build custom ERP platforms that optimize operations, automate workflows, and empower businesses with centralized data management.",
    num: "01",
    large: true,
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Our developers code with precision, creating powerful, scalable, and secure web applications.",
    num: "02",
    large: false,
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Our design wizards transform your vision into pixel-perfect reality, ensuring a visually stunning and engaging website.",
    num: "03",
    large: false,
  },
  {
    icon: Database,
    title: "CMS Development",
    desc: "Take control of your content with our custom Content Management System solutions.",
    num: "04",
    large: false,
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing support, updates, and enhancements to keep your site in top shape.",
    num: "05",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    desc: "We turn complexity into clarity through meticulous business and functional analysis, paving the path to success.",
    num: "06",
    large: true,
  },
];

export default function ServicesSection({ networkImage }) {
  return (
    <section id="services" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <img src={networkImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            // Our Services
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-4">
            What We Build
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            End-to-end digital solutions engineered for performance and scale.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className={`group relative border border-border/60 bg-card/40 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden ${
                s.large ? "lg:col-span-2" : ""
              }`}
            >
              {/* Spotlight on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                   style={{
                     background: "radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.06), transparent 60%)",
                   }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/40">{s.num}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}