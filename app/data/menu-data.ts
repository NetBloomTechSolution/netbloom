import type { MenuItem } from '~/types/menu-d-t';

const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    hasDropdown: true,
    title: "Services",
    pluseIncon: true,
    link: "/services",
    submenus: [
      { title: "All Services", link: "/services" },
      { title: "Development", link: "/service-details" },
      { title: "Marketing Strategy", link: "/service-details" },
      { title: "UI/UX & Graphics", link: "/service-details" },
      { title: "Cloud & Technology", link: "/service-details" },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    title: "Portfolio",
    pluseIncon: true,
    link: "/portfolio",
    submenus: [
      { title: "All Case Studies", link: "/portfolio" },
      { title: "Creative Showcase", link: "/portfolio-details-creative-slider" },
      { title: "3-Column Grid", link: "/portfolio-col-3" },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    title: "Blog",
    pluseIncon: true,
    link: "/blog",
    submenus: [
      { title: "Latest News", link: "/blog" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
