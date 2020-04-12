import { search, account, settings } from '@icons';

export type MenuItem = {
  key: string;
  label: string;
  link?: string;
  icon?: boolean;
};

export const mainMenu: MenuItem[] = [
  {
    label: search,
    key: 'search',
    icon: true
  },
  {
    label: account,
    link: 'account',
    key: 'account',
    icon: true
  },
  {
    label: settings,
    key: 'settings',
    icon: true
  }
];

export const sideMenu: MenuItem[] = [
  {
    label: "Home",
    link: "/",
    key: "home"
  },
  {
    label: "Novels",
    link: "/novels",
    key: "all-novels"
  },
  {
    label: "Latest Updates",
    link: "/novels/latest",
    key: "latest-novels"
  },
  {
    label: "Top Novels",
    link: "/novels/top-novels",
    key: "top-novels"
  },
  {
    label: "Featured",
    link: "/novels/most-popular",
    key: "most-popular-novels"
  },
  {
    label: "Advanced Search",
    link: "/search",
    key: "search"
  },
  {
    label: "Terms and conditions",
    link: "/pages/terms-and-conditions",
    key: "terms-and-conditions"
  },
  {
    label: "Privacy policy",
    link: "/pages/privacy-policy",
    key: "privacy-policy"
  },
  {
    label: "Copyright",
    link: "/pages/copyright",
    key: "copyright"
  },
  {
    label: "Contact",
    link: "/contact",
    key: "contact"
  }
]