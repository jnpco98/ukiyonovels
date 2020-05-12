export type MenuItem = {
  key: string;
  label: string;
  link?: string;
  icon?: boolean;
};

export const mainMenu: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
    icon: false,
    link: '/'
  },
  {
    label: 'Novels',
    key: 'novels',
    icon: false,
    link: '/novels'
  },
  {
    label: 'Latest Updates',
    key: 'latest-updates',
    icon: false,
    link: '/novels/latest'
  },
  {
    label: 'Top Novels',
    key: 'most-popular',
    icon: false,
    link: '/novels/most-popular'
  },
  {
    label: 'Search',
    key: 'search',
    icon: true
  }
];

export const footerMenu: MenuItem[] = [
  {
    label: 'Terms and conditions',
    key: 'terms-and-conditions',
    icon: false,
    link: '/'
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: false,
    link: '/'
  }
];
