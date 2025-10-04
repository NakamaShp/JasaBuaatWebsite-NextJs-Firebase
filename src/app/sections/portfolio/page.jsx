import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';
import { Footer7 } from '@/blocks/footer';

const Portfolio = dynamic(() => import('@/views/sections/Portfolio'));

/***************************  METADATA - Portfolio  ***************************/

export const metadata = { ...SEO_CONTENT.Portfolio, openGraph: { ...SEO_CONTENT.Portfolio, url: PAGE_PATH.Portfolio } };

/***************************  PAGE - Portfolio  ***************************/

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <Footer7 />
    </>
  );
}
