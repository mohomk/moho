import Image from 'next/image'

const STATUS_PAGE_URL = 'https://moho.statuspage.io'

// Brand icon paths from simple-icons (lucide-react no longer ships brand icons)
const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mohomk',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@wearemoho',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

const STATUS_STYLES = {
  operational: { dot: 'bg-green-500', ping: 'bg-green-400' },
  degraded: { dot: 'bg-yellow-500', ping: 'bg-yellow-400' },
  outage: { dot: 'bg-red-500', ping: 'bg-red-400' },
}

async function getStatus() {
  try {
    const res = await fetch(`${STATUS_PAGE_URL}/api/v2/status.json`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error('bad response')

    const { status } = await res.json()
    if (status?.indicator === 'none') return 'operational'
    if (status?.indicator === 'minor') return 'degraded'
    if (status?.indicator === 'major' || status?.indicator === 'critical') return 'outage'
    return 'operational'
  } catch {
    return 'operational'
  }
}

export default async function Footer({ dict }) {
  const status = await getStatus()
  const style = STATUS_STYLES[status]
  const label = { operational: dict.status, degraded: dict.statusDegraded, outage: dict.statusOutage }[status]

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
          {/* Live status indicator, sourced from statuspage.io */}
          <a
            href={STATUS_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${style.ping} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`} />
            </span>
            {label}
          </a>
        </div>

        <div className="flex items-center flex-wrap justify-center-safe gap-8">
          <a href="#services" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {dict.nav.services}
          </a>
          <a href="#process" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {dict.nav.process}
          </a>
          <a href="#why-us" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {dict.nav.whyUs}
          </a>
          <a href="#products" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {dict.nav.products}
          </a>
          <a href="#contact" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {dict.nav.contact}
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d={path} />
              </svg>
            </a>
          ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground/50">
            {dict.copyright.replace('{year}', new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
}