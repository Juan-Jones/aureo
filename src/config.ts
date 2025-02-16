import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://earnonlinemoney.org", // replace this with your deployed domain
  author: "Dejuan Jones",
  profile: "https://github.com/juan-jones/",
  desc: "Ultimate guide to earn money online free. Find legitimate side hustles, passive income ideas, online jobs & more.",
  title: "Earn Money Online",
  ogImage: "opengraph.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/earnmoneynowonline",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/earn-money-online-free",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/moneyonline_fre",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/Internetrevenue/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: true,
  },
];
