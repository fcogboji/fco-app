// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-6 items-center justify-center">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/listings" className="text-gray-700 hover:text-blue-600 transition">
          Listings
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
