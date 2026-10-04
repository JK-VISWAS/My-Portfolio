import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow flex items-center justify-center py-36 px-6 bg-[#f8f8f5]">
        <div className="max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#8a8a8a] block mb-4">
            404 / Page Not Found
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111111] mb-6">
            PAGE NOT <span className="font-editorial italic font-normal text-[#1a1a1a]">FOUND.</span>
          </h1>
          <p className="text-[#6b6b6b] text-base leading-relaxed mb-8">
            The requested archive or case study does not exist or may have been relocated.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#f8f8f5] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#2d5a3c] transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
