'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { } from 'react';

const LandingCard = () => {
  const router = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: <explanation>
    <div
      className="group relative max-w-xl rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="-inset-px pointer-events-none absolute rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 text-center">
        <h3 className="font-semibold text-base text-sky-500 leading-7">
          Assignment
        </h3>
        <h1 className="mt-2 font-bold text-4xl text-white tracking-tight">
          Mini Event Manager
        </h1>
        <p className="mt-6 text-base text-gray-300 leading-7">
          A simple event manager where you can add, list, search, and delete
          events. Built with Next.js, Tailwind, and client-side state.
        </p>
        <button
          type="button"
          onClick={() => router.push('/events')}
          className="mt-8 rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Go to Events
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-8">
      <LandingCard />
    </div>
  );
}
