import { profile, bookTopics } from '../../data';
import Label from '../common/Label';
import ExternalLink from '../common/ExternalLink';

export default function Book() {
  return (
    <section id="book" className="shell section">
      <div className="grid items-center gap-9 md:grid-cols-2 md:gap-16">
        <div className="order-2 flex min-h-[440px] flex-col items-center justify-center rounded-lg bg-lavender px-5 py-10 md:order-1">
          {profile.bookCover ? (
            <img
              src={profile.bookCover}
              alt="Engineering Intelligent Products book cover"
              loading="lazy"
              className="max-h-96 w-64 max-w-full object-contain shadow-xl"
            />
          ) : (
            <>
              <div
                role="img"
                aria-label="Typographic placeholder book cover"
                className="relative h-[330px] w-60 max-w-full -rotate-3 overflow-hidden border-l-8 border-[#c2babf] bg-[#f5f1e5] p-5 shadow-xl"
              >
                <p className="text-[9px] tracking-widest text-ink">
                  RAJA NARAYANASAMY
                </p>
                <p className="mt-7 font-serif text-[30px] leading-tight text-ink">
                  Engineering
                  <br />
                  Intelligent
                  <br />
                  <em className="text-accent">Products</em>
                </p>
                <p className="mt-4 text-[11px] leading-5">
                  Practical Guide to AI, Edge,
                  <br />
                  and Data Integration
                </p>
                <div
                  aria-hidden="true"
                  className="absolute right-5 bottom-8 flex items-end gap-1"
                >
                  <span className="h-12 w-9 rounded-t-full bg-[#b7c3a5]" />
                  <span className="h-20 w-9 rounded-t-full bg-[#cec3d9]" />
                  <span className="h-14 w-9 rounded-t-full bg-[#dbc6ad]" />
                  <span className="h-16 w-9 rounded-t-full bg-[#a1b4ab]" />
                </div>
              </div>
              <p className="mt-8 text-center text-xs">
                Cover concept · Official cover to be added
              </p>
            </>
          )}
        </div>
        <div className="order-1 md:order-2">
          <Label>
            Chapter 07 · Sharing What I Have Learned
          </Label>
          <h2 className="heading mb-6">
            Experience,
            <br />
            <em>put into words.</em>
          </h2>
          <h3 className="text-xl">
            Engineering Intelligent Products
          </h3>
          <p className="mt-2 mb-6 text-sm">
            Practical Guide to AI, Edge, and Data Integration
          </p>
          <div className="body-copy">
            <p>
              After decades of building technology, engineering
              organisations and businesses, I wanted to bring
              together the engineering perspective behind
              intelligent products.
            </p>
            <p>
              The book is intended for engineers, architects,
              product managers and technology leaders who want
              to move beyond individual technologies and
              understand how to build intelligent products as
              complete systems.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="button" href="#book-topics">
              Explore the book ↓
            </a>
            {profile.bookUrl ? (
              <ExternalLink
                href={profile.bookUrl}
                className="button"
              >
                Buy the book
              </ExternalLink>
            ) : (
              <span className="rounded border border-line px-4 py-3 text-xs text-muted">
                Purchase link coming soon
              </span>
            )}
          </div>
          <a className="text-link mt-3" href="#connect">
            Invite me to speak ↗
          </a>
        </div>
      </div>
      <div
        id="book-topics"
        className="mt-10 border-t border-line pt-7"
      >
        <Label>Inside the book</Label>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-4">
          {bookTopics.map((topic) => (
            <li key={topic} className="flex gap-2 text-sm">
              <span
                aria-hidden="true"
                className="text-accent"
              >
                ↗
              </span>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}