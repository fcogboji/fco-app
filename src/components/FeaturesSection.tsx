// src/components/FeaturesSection.tsx

import { Zap, Lock, Code2 } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Everything You Need
        </h2>
        <p className="text-gray-600 mb-16">
          From payments to authentication, Post Bridge handles it all for you.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Zap className="w-10 h-10 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Setup</h3>
            <p className="text-sm text-gray-600">
              Integrate Stripe and start collecting payments in minutes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <Lock className="w-10 h-10 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure</h3>
            <p className="text-sm text-gray-600">
              We use Clerk and Stripe, so your users and data are safe.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Code2 className="w-10 h-10 text-black mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Backend Needed</h3>
            <p className="text-sm text-gray-600">
              Zero backend code — just plug in, configure, and launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
