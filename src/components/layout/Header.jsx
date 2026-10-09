import { useEffect, useRef, useState } from 'react';
import { navigation } from '../../data';
import Brand from '../common/Brand';

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    function keydown(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function outside(event) {
      if (!headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    const media = window.matchMedia('(min-width: 768px)');
    const resize = () => setOpen(false);
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', outside);
    media.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', outside);
      media.removeEventListener('change', resize);
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm"
    >
      <div className="shell flex min-h-20 flex-wrap items-center justify-between gap-x-5">
        <Brand />
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
          className="flex min-h-11 items-center gap-2 rounded border border-line px-3 text-xs md:hidden"
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true">
            {open ? '×' : '☰'}
          </span>
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`
            ${open ? 'flex' : 'hidden'}
            w-full flex-col gap-1 pb-5
            md:flex md:w-auto md:flex-row
            md:items-center md:gap-5 md:pb-0
          `}
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`
                flex min-h-11 items-center py-2
                text-sm hover:text-accent
                ${
                  id === 'connect'
                    ? 'mt-2 w-fit rounded border border-line px-4 md:mt-0'
                    : ''
                }
              `}
            >
              {label}
              {id === 'connect' && (
                <span className="ml-3" aria-hidden="true">
                  ↗
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}