// @project
import SvgIcon from '@/components/SvgIcon';
import { PAGE_PATH, SOSIAL_MEDIA_URL, FREEBIES_URL, PRIVIEW_PATH } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

// const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: true,
  secondaryBtn: {
    target: '_blank',
    rel: 'noopener noreferrer',
    children: <SvgIcon name="tabler-brand-facebook" color="primary.main" size={18} />,
    children: <SvgIcon name="tabler-brand-instagram" color="primary.main" size={18} />,
    link: SOSIAL_MEDIA_URL.instagram,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Mulai Sekarang', link: PAGE_PATH.contact },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    { id: 'about', title: 'Tentang Kami', link: PAGE_PATH.about },
    { id: 'servicec', title: 'Layanan', link: PAGE_PATH.service },
    { id: 'portfolio', title: 'Portfolio', link: PAGE_PATH.portfolio },
    { id: 'blog', title: 'Blog', link: PAGE_PATH.blog }
  ]
};
