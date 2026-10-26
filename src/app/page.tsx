'use client'

import dynamic from 'next/dynamic';
import SOSButton from '@/components/SOSButton';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
      Loading LitRoute....
    </div>
  ),
});

export default function Home() {
  return (
    <main className = "relative w-screen h-screen overflow-hidden">
      {/* Top Header Branding*/}
      <header className="fixed top-0 left- 0 right-0 z-50 bg-slate-900/90 text-white backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center border-b border-slate-800">
        <div className = "flex items-center gap-2">
          <span className="text-xl">💡</span>
          <h1 className="text-2xl font-black tracking-wider text-amber-400">
            Lit<span className="text-white">Route.</span>
          </h1>
        </div>
        <p className="text-xs font-medium text-slate-400 hidden sm:block">
          Safe Night Out.
        </p>
      </header>

      <Map />

      <SOSButton />
    </main>
  );
}