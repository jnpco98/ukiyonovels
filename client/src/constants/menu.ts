import { search } from '@icons';
import { LinkProps } from 'next/link';

export type MenuItem = {
  key: string;
  link?: LinkProps;
} & ({ label: string, icon?: never } | { icon: string, label?: never });

export const mobilePrimaryMenu: MenuItem[] = [
  {
    key: 'mm_search',
    icon: search
  }
];

export const mobileSecondaryMenu: MenuItem[] = [
  {
    label: 'Home',
    key: 'ms_home',
    link: { href: `/` }
  },
  {
    label: 'Latest Updates',
    key: 'ms_latest-updates',
    link: { href: `/latest-releases` }
  },
  {
    label: 'Top Novels',
    key: 'ms_most-popular',
    link: { href: `/top-novels` }
  },
  {
    label: 'Advanced Search',
    key: 'ms_advanced-search',
    link: { href: `/advanced-search` }
  },
  {
    label: 'Contact',
    key: 'ms_contact',
    link: { href: `/contact` }
  }
];

export const primaryMenu: MenuItem[] = [
  {
    key: 'm_search',
    icon: search
  }
];

export const secondaryMenu: MenuItem[] = [
  {
    label: 'Home',
    key: 's_home',
    link: { href: `/` }
  },
  {
    label: 'Latest Updates',
    key: 's_latest-updates',
    link: { href: `/latest-releases` }
  },
  {
    label: 'Top Novels',
    key: 's_most-popular',
    link: { href: `/top-novels` }
  },
  {
    label: 'Advanced Search',
    key: 's_advanced-search',
    link: { href: `/advanced-search` }
  },
  {
    label: 'Contact',
    key: 's_contact',
    link: { href: `/contact` }
  }
];

export const footerMenu: MenuItem[] = [
  {
    label: 'DMCA',
    key: 'f_dmca',
    link: { href: `/page/[pageSlug]`, as: `/page/dmca` }
  },
  {
    label: 'Contact',
    key: 'f_contact',
    link: { href: `/contact` }
  },
  {
    label: 'Privacy',
    key: 'f_privacy',
    link: { href: `/page/[pageSlug]`, as: `/page/privacy-policy` }
  },
  {
    label: 'Terms and conditions',
    key: 'f_terms-and-conditions',
    link: { href: `/page/[pageSlug]`, as: `/page/terms-and-conditions` }
  }
];