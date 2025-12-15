"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-navy border-b border-darkGray">
      <div className="text-2xl font-bold text-blueAccent">
        VectorAlgoAI
      </div>

      <div className="flex space-x-8 text-soft">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Link href="/founders">Founders</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
