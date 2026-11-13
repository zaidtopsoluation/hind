import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL, PRICING_NOTE, type Faq } from '@/lib/seo-content';

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-secondary-fixed mb-2">
      <ol className="flex flex-wrap items-center justify-center gap-1">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Hero({
  badge,
  h1,
  lead,
  crumbs,
}: {
  badge: string;
  h1: string;
  lead: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="relative flex items-center justify-center px-margin-mobile md:px-margin-desktop py-14 md:py-20 overflow-hidden bg-deep-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-20 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: 'url(/hvac_commercial.jpg)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-5 items-center">
        <Breadcrumbs items={crumbs} />
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-secondary-fixed font-label-sm text-label-sm px-4 py-2 rounded-full w-fit">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            location_on
          </span>
          {badge}
        </div>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-extrabold tracking-tight leading-tight">
          {h1}
        </h1>
        <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">{lead}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={PHONE_TEL}
            className="bg-arctic-cyan text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-cool flex items-center justify-center gap-2 active:scale-95 font-bold"
          >
            <span className="material-symbols-outlined">call</span>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-md text-body-md text-on-surface">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="material-symbols-outlined text-secondary mt-0.5" aria-hidden="true">
            check_circle
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingNote() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
      <div className="rounded-xl bg-ice-wash border border-arctic-cyan/30 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="flex gap-4 items-start">
          <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden="true">
            verified
          </span>
          <div>
            <h2 className="font-headline-md text-headline-md text-deep-navy font-bold mb-2">How pricing works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">{PRICING_NOTE}</p>
          </div>
        </div>
        <a
          href={PHONE_TEL}
          className="shrink-0 bg-deep-navy text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-full hover:bg-secondary transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">call</span>
          Get a free quote
        </a>
      </div>
    </section>
  );
}

export function FaqList({ faqs, title }: { faqs: Faq[]; title: string }) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
      <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-surface-container-highest bg-white p-5 cool-shadow">
            <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-label-lg text-label-lg text-deep-navy font-bold">
              {f.q}
              <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-90" aria-hidden="true">
                arrow_forward
              </span>
            </summary>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function LinkGrid({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; icon?: string }[];
}) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
      <h2 className="font-headline-lg text-headline-lg text-deep-navy font-bold mb-6">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex items-center gap-3 rounded-xl border border-surface-container-highest bg-white p-4 hover:border-secondary transition-colors text-deep-navy font-label-lg text-label-lg"
            >
              <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                {l.icon ?? 'location_on'}
              </span>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CallBanner({ text }: { text: string }) {
  return (
    <section className="bg-deep-navy text-white py-14 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="font-headline-md text-headline-md font-bold max-w-2xl">{text}</p>
        <a
          href={PHONE_TEL}
          className="bg-arctic-cyan text-deep-navy font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-white transition-all flex items-center gap-2 font-bold"
        >
          <span className="material-symbols-outlined">call</span>
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
