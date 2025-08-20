'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';

type Event = {
  name: string;
  date: string;
};

const LandingCard = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const prevEvents = JSON.parse(localStorage.getItem('AllEvents') || '[]');
    setEvents(prevEvents);
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName.trim() || !eventDate) {
      return;
    }

    const newEvent: Event = { name: eventName.trim(), date: eventDate };
    const all_events = [...events, newEvent]
    setEvents(all_events);
    localStorage.setItem('AllEvents', JSON.stringify(all_events));

    setEventName('');
    setEventDate('');
  };

  const handleDelete = (index: number) => {
    const all_events = events.filter((_, i) => i !== index)
    setEvents(all_events);
    localStorage.setItem('AllEvents', JSON.stringify(all_events));
  };

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

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
      className="group relative max-w-xl rounded-xl border border-white/10 bg-gray-900 px-32 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="-inset-px pointer-events-none absolute rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 text-center">
        <h1 className='mb-4 text-center font-bold text-2xl text-white'>Events</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search events..."
          className="mb-4 w-full rounded border px-3 py-2 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-6 flex flex-col gap-3 rounded bg-gray-500 p-4 shadow"
        >
          <input
            type="text"
            placeholder="Event Name"
            className="rounded border px-3 py-2"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <input
            type="date"
            className="rounded border px-3 py-2"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <button
            type="submit"
            className="rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Add Event
          </button>
        </form>

        {/* Event List */}
        <h2 className="mb-2 font-semibold text-lg text-white">List of Events</h2>
        <ul className="space-y-2">
          {filteredEvents.length === 0 && (
            <li className="text-gray-500 ">No events found.</li>
          )}
          {filteredEvents.map((event, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded bg-white px-4 py-2 shadow"
            >
              <span>
                <strong>{event.name}</strong> – {event.date}
              </span>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className='bg-white text-red-500 hover:bg-red-400 hover:text-white'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

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
