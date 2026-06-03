import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/moho-logo.svg"
            alt="MOHO Logo"
            width={70}
            height={28}
            priority
          />
          {/* Live status indicator */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            All systems operational
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-center-safe gap-8">
          <a href="#services" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            Process
          </a>
          <a href="#why-us" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#products" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#contact" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground/50">
          {`© ${new Date().getFullYear()} Moho. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}