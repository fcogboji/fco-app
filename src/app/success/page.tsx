'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'lucide-react';

export default function SuccessPage() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-black px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-6xl mb-6"
      >
        🎉
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Payment Successful!
      </motion.h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Thank you for subscribing. You now have access to premium features.
      </p>

      <Link
        href="/"
        className="mt-4 inline-block bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
