import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';
import { Footer7 } from '@/blocks/footer';

const Service = dynamic(() => import('@/views/sections/Service'));

/***************************  METADATA - SERVICE  ***************************/

export const metadata = { ...SEO_CONTENT.Service, openGraph: { ...SEO_CONTENT.service, url: PAGE_PATH.service } };

/***************************  PAGE - SERVICE  ***************************/

export default function ServicePage() {
  return (
    <>
      <Service />
      <Footer7 />
    </>
  );
}
