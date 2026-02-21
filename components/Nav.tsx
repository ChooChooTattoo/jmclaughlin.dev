'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Resume', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const linkClass = 'text-sm font-medium uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-white';

export default function Nav(): React.JSX.Element {
  const [opacity, setOpacity] = useState(0.15);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      setOpacity(0.15 + 0.85 * progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        transition: 'background-color 30ms linear',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-5 sm:px-6">
        <ul className="flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" aria-label="Home" className={linkClass}>
              <svg
                viewBox="0 0 30 14"
                width="30"
                height="14"
                fill="currentColor"
                aria-hidden="true"
              >
                <text
                  x="0"
                  y="12"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                  fontSize="13"
                  fontWeight="600"
                >
                  ~/
                </text>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Gradient tail softens the bottom edge */}
      <div
        style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), transparent)` }}
        className="pointer-events-none absolute left-0 right-0 top-full h-10"
      />
    </nav>
  );
}
