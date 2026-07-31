import Image from 'next/image'

const STATUS_PAGE_URL = 'https://moho.statuspage.io'

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

        <p className="font-mono text-xs text-muted-foreground/50">
          {dict.copyright.replace('{year}', new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
}