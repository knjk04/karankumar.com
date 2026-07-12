// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

const currentYear = new Date().getFullYear();

export const SITE = {
  /** Site name — used in the header brand, <title>, and og:site_name. */
  title: 'Karan Kumar',
  /** Default meta description for pages that don't set their own. */
  description: 'Personal site of Karan Kumar, a Software Engineer',
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: 'Personal site of Karan Kumar.',
  /** Default social share image, relative to the site root (see public/). */
  ogImage: '/og.jpg',
  /** Footer credit line. */
  footerText: `© ${currentYear} Karan Kumar. All rights reserved.`,
} as const;

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. */
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
  { href: '/search/', label: 'Search' },
] as const;
