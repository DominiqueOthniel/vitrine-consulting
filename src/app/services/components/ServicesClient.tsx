'use client';

import dynamic from 'next/dynamic';

const ServicesVideoSection = dynamic(() => import('./ServicesVideoSection'), { ssr: false });
const ServicesInteractive = dynamic(() => import('./ServicesInteractive'), { ssr: false });

export default function ServicesClient() {
  return (
    <>
      <ServicesVideoSection />
      <ServicesInteractive />
    </>
  );
}
