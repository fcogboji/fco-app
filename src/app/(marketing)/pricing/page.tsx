import PricingSection from '@/components/PricingSection';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
        <Link href="/" className="text-xl font-bold">FCO App</Link>
        <div className="space-x-4">
          <Link href="/pricing" className="text-black hover:underline">Pricing</Link>
          <Link href="/dashboard" className="text-black hover:underline">Dashboard</Link>
        </div>
      </nav>

      <PricingSection />
    </main>
  );
}