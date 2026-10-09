import { profile } from '../../data';
import Label from '../common/Label';

export default function Hero() {
  return (
    <>
     <section className="shell grid items-center gap-8 py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10 lg:py-12">
        <div>
          <Label>
            Engineer at heart. Builder by nature.
          </Label>
          <h1 className="font-serif text-[32px] leading-[1.15] tracking-tight sm:text-[40px] lg:text-[52px]">
  Built on experience.
  <em className="mt-3 block text-accent">
    Driven by possibility.
  </em>
</h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink">
            {profile.roles}
          </p>
          <div className="body-copy mt-5 max-w-lg">
            <p>
              For more than 28 years, I have worked at the
              intersection of engineering, technology and business
              — building products, engineering organisations,
              technology businesses and new capabilities across
              industries and geographies.
            </p>
            <p>
              Today, my focus is on the next generation of
              intelligent products — where AI meets the physical
              world.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a className="button" href="#story">
              Explore my story
              <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#book">
              Meet the book ↗
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="relative h-80 overflow-hidden rounded-t-[90px] rounded-b-md border border-[#d1dcc8] bg-sage sm:h-[420px]">
            {profile.portrait ? (
              <img
                src={profile.portrait}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <p className="absolute inset-x-0 top-8 text-center text-[10px] tracking-[0.2em]">
                  A LIFE IN TECHNOLOGY
                </p>
                <div
                  aria-hidden="true"
                  className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-[#b8c7aa]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-serif text-[130px] tracking-[-0.14em] text-[#8f9d80] sm:text-[170px]"
                >
                  R
                  <span className="translate-y-7 text-[#a4af93]">
                    N
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-8 text-center">
                  <p className="font-serif text-xl text-ink">
                    {profile.name}
                  </p>
                  <p className="text-xs">
                    Portrait to be added
                  </p>
                </div>
              </>
            )}
          </div>
          <a
            href="#book"
            className="relative mx-3 -mt-4 flex items-center gap-4 rounded border border-line bg-[#fffefa] p-5 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="-rotate-6 border-l-4 border-[#c6bed3] bg-lavender p-3 font-serif text-2xl"
            >
              EI
            </span>
            <span>
              <span className="block text-[9px] tracking-widest text-muted">
                FROM EXPERIENCE TO THE PAGE
              </span>
              <span className="mt-1 block font-serif text-lg leading-6">
                Engineering Intelligent Products
              </span>
              <span className="mt-2 block text-xs text-accent">
                Discover the book ↗
              </span>
            </span>
          </a>
        </div>
      </section>
      <div className="border-y border-line">
        <div className="shell flex flex-col items-center justify-between gap-2 py-5 text-center md:flex-row md:text-left">
          <span className="text-[10px] tracking-widest text-muted">
            EXPLORING WHAT’S NEXT
          </span>
          <p className="text-xs leading-6">
            {profile.focus}
          </p>
        </div>
      </div>
    </>
  );
}