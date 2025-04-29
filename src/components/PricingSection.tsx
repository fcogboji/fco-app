'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PLANS = [
  {
    name: 'Starter',
    price: '$9.99/mo',
    priceId: "price_1RH7UFITzjvjroXhhGvjqbkN", // replace with your Stripe Price ID
    description: 'Everything you need to get started.',
    features: ['Basic analytics', 'Single project', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$19.99/mo',
    priceId: "price_1RH7UFITzjvjroXhhGvjqbkN", // replace with your Stripe Price ID
    description: 'More power for growing teams.',
    features: ['Advanced analytics', 'Unlimited projects', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceId: '',
    description: 'Custom solutions for larger teams.',
    features: ['Dedicated support', 'Custom features', 'SLA + compliance'],
  },
];

export default function PricingSection() {
  // Define loading state
  const [loading, setLoading] = useState(false);

  // Handle checkout
  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    const stripe = await stripePromise;

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const session = await res.json();

    if (session?.id) {
      stripe?.redirectToCheckout({ sessionId: session.id });
    } else {
      console.error('Stripe session error:', session);
      alert('Checkout failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="w-full px-6 py-24 text-center bg-white">
      <h2 className="text-4xl font-bold mb-4">Simple pricing for everyone</h2>
      <p className="text-gray-600 mb-16">Start for free, upgrade when you're ready.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-xl p-8 shadow hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-4">{plan.price}</p>
            <p className="text-gray-500 mt-2 mb-6">{plan.description}</p>

            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm text-gray-700">
                  • {feature}
                </li>
              ))}
            </ul>

            {plan.priceId ? (
              <button
                disabled={loading}
                onClick={() => handleCheckout(plan.priceId)}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
              >
                {loading ? 'Loading...' : 'Subscribe'}
              </button>
            ) : (
              <a
                href="#"
                className="w-full inline-block border border-black py-2 rounded-lg text-black hover:bg-gray-100"
              >
                Contact sales
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
