// @project
import SvgIcon from '@/components/SvgIcon';
import { PAGE_PATH, FREEBIES_URL, PRIVIEW_PATH } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

// const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />,
    href: '#contactUs',
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Mulai Sekarang', href: PAGE_PATH.contactUs },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    { id: 'about', title: 'Tentang Kami', link: PAGE_PATH.about },
    {
      id: 'service',
      title: 'Layanan',
      link: PAGE_PATH.service,
      dropdown: [
        {
          id: 'service-business',
          title: 'Pembuatan Website Bisnis',
          link: `${PAGE_PATH.service}#website-bisnis`
        },
        {
          id: 'service-ecommerce',
          title: 'Website E-Commerce',
          link: `${PAGE_PATH.service}#ecommerce`
        },
        {
          id: 'service-landing',
          title: 'Landing Page Campaign',
          link: `${PAGE_PATH.service}#landing-page`
        },
        {
          id: 'service-cms',
          title: 'Website Custom & CMS',
          link: `${PAGE_PATH.service}#custom-cms`
        }
      ]
    },
    { id: 'portfolio', title: 'Portfolio', link: PAGE_PATH.portfolio },
    { id: 'blog', title: 'Blog', link: PAGE_PATH.blog }
  ]
};
