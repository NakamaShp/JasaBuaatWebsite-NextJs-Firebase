// @project
import SvgIcon from '@/components/SvgIcon';
import { PAGE_PATH, FREEBIES_URL, PRIVIEW_PATH } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />,
    href: FREEBIES_URL,
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Mulai Sekarang', href: PAGE_PATH.contactUs },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    { id: 'about', title: 'About Us', link: PAGE_PATH.about },
    { id: 'service', title: 'Service', link: PAGE_PATH.service },
    { id: 'blog', title: 'Blog', link: PAGE_PATH.blog },
    { id: 'gallery', title: 'Gallery', link: PAGE_PATH.gallery }
  ]
};
