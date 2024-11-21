// /src/utils/navigation.ts
export interface Props {
  name: string;
  url?: string;
  subLinks?: Props[];
}

// Navigation links with sub-links for dropdowns
export const navBarLinks: Props[] = [
  {
    name: "Startup",
    subLinks: [
      { name: "Start", url: "/products/product1" },
      { name: "Grow", url: "/products/product2" },
      { name: "Automation", url: "/products/product3" },
    ],
  },
  {
    name: "Business",
    subLinks: [
      { name: "Start a Business", url: "/services/consulting" },
      { name: "Online Business", url: "/services/aaaa" },
      { name: "Entrepreneur", url: "/startupa" },
      { name: "Marketplace", url: "/startusp" },
      { name: "Print on Demand", url: "/startudp" },
      { name: "Monetization", url: "/monetization" },
      { name: "Productivity", url: "/productivity" },
    ],
  },
    {
    name: "Marketing",
    subLinks: [
      { name: "Digital Marketing", url: "/digital-marketing" },
      { name: "Social Media", url: "/social-media" },
      { name: "Email Marketing", url: "/email-marketing" },
      { name: "Content Strategy", url: "/content" },
      { name: "SEO", url: "/seo" },
    ],
  },
      {
    name: "Research",
    subLinks: [
      { name: "Growing Industry", url: "/growing-industry" },
      { name: "Forecasting", url: "/forecasting" },
      { name: "Data Insights", url: "/data-insights" },
      { name: "Data Report", url: "/data-report" },
    ],
  },
    {
    name: "Stories",
    subLinks: [
      { name: "Strategy", url: "/report" },
      { name: "Success Stories", url: "/success-stories" },
      { name: "Wisdom of Wealth", url: "/success-storiesa" },
    ],
  },
    {
    name: "Help & Guides",
    subLinks: [
      { name: "Start Here", url: "/start-here" },
      { name: "Research", url: "/research" },
      { name: "Tools", url: "/tools" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
      { name: "Advertise", url: "/advertise" },
    ],
  },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
