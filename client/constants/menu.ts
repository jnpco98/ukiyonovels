import { search } from '@icons';

export type MenuItem = {
  key: string;
  link?: string;
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
    link: '/'
  },
  {
    label: 'Novels',
    key: 'ms_novels',
    link: '/novels'
  },
  {
    label: 'Latest Updates',
    key: 'ms_latest-updates',
    link: '/novels/latest'
  },
  {
    label: 'Top Novels',
    key: 'ms_most-popular',
    link: '/novels/most-popular'
  },
  {
    label: 'Advanced Search',
    key: 'ms_advanced-search',
    link: '/advanced-search'
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
    link: '/'
  },
  {
    label: 'Novels',
    key: 's_novels',
    link: '/novels'
  },
  {
    label: 'Latest Updates',
    key: 's_latest-updates',
    link: '/novels/latest'
  },
  {
    label: 'Top Novels',
    key: 's_most-popular',
    link: '/novels/most-popular'
  }
];


export const footerMenu: MenuItem[] = [
  {
    label: 'DMCA',
    key: 'f_dmca',
    link: '/pages/dmca'
  },
  {
    label: 'Contact',
    key: 'f_contact',
    link: '/pages/contact'
  },
  {
    label: 'Privacy',
    key: 'f_privacy',
    link: '/pages/privacy'
  },
  {
    label: 'Terms and conditions',
    key: 'f_terms-and-conditions',
    link: '/pages/terms-and-conditions'
  }
];
