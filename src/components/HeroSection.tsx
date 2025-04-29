// src/components/HeroSection.tsx

export default function HeroSection() {
    return (
      <section className="w-full px-6 py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        {/* Main heading */}
        <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          The Fastest Way to Monetize Your Side Projects
        </h1>
  
        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Add a Stripe-powered pricing page to your app in minutes. No backend
          code required.
        </p>
  
        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900"
          >
            Get started
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100"
          >
            Live demo
          </a>
        </div>
      </section>
    );
  }
  