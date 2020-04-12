export type MenuItem = {
  key: string;
  label: string;
  link?: string;
  icon?: boolean;
};

export const mainMenu: MenuItem[] = [
  {
    label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="#000" fill-rule="nonzero" d="M13.429.1c-3.93 0-7.13 3.246-7.13 7.234 0 1.701.607 3.253 1.585 4.49l-7.884 8 1.114 1.143 7.89-8.007c1.22.993 2.748 1.608 4.425 1.608 3.93 0 7.129-3.247 7.129-7.234 0-3.988-3.2-7.235-7.13-7.235zm0 1.607c3.07 0 5.545 2.512 5.545 5.627 0 3.114-2.476 5.626-5.545 5.626-3.07 0-5.545-2.512-5.545-5.626 0-3.115 2.475-5.627 5.545-5.627z"/></svg>',
    key: 'search',
    icon: true
  },
  {
    label: '<svg xmlns="http://www.w3.org/2000/svg" class="o-icon o-icon--account c-header__top-menu__icon-account" data-inject-url="https://cdn.shopify.com/s/files/1/0120/0311/5089/t/63/assets/icon-account.svg?v=8849856479448499857" viewBox="0 0 18 20"><path fill="#000" fill-rule="nonzero" d="M9.333.1c-2.864 0-5.2 2.37-5.2 5.276 0 2.906 2.336 5.277 5.2 5.277 2.864 0 5.2-2.37 5.2-5.277C14.533 2.47 12.197.1 9.333.1zm0 10.553c-4.773 0-8.666 3.95-8.666 8.795H2.4c0-3.896 3.094-7.036 6.933-7.036 3.84 0 6.934 3.14 6.934 7.036H18c0-4.844-3.893-8.795-8.667-8.795zm0-8.795c1.923 0 3.467 1.567 3.467 3.518 0 1.951-1.544 3.518-3.467 3.518S5.867 7.327 5.867 5.376c0-1.951 1.543-3.518 3.466-3.518z"/></svg>',
    link: 'account',
    key: 'account',
    icon: true
  },
  {
    label: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.667 405.333h-56.811C424.619 374.592 396.373 352 362.667 352s-61.931 22.592-71.189 53.333H21.333C9.557 405.333 0 414.891 0 426.667S9.557 448 21.333 448h270.144c9.237 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-128 53.334c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736 33.259 291.477 64H21.333C9.557 64 0 73.557 0 85.333s9.557 21.333 21.333 21.333h270.144C300.736 137.408 328.96 160 362.667 160s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333S502.464 64 490.667 64zm-128 53.333c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931 22.592-71.189 53.333H21.333C9.557 234.667 0 244.224 0 256c0 11.776 9.557 21.333 21.333 21.333h56.811c9.259 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h270.144c11.797 0 21.333-9.557 21.333-21.333.001-11.776-9.535-21.333-21.332-21.333zM149.333 288c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.357 32-32 32z"/></svg>',
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