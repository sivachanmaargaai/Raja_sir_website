import { profile, insights } from '../../data';
import Label from '../common/Label';
import ExternalLink from '../common/ExternalLink';

export default function Insights() {
  return (
    <section
      id="insights"
      className="section border-y border-line bg-[#f0eee8]"
    >
      <div className="shell">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <Label>Notes, ideas & perspectives</Label>
            <h2 className="heading">
              Thinking <em>out loud.</em>
            </h2>
          </div>
          <p>
            Technology changes quickly. I use writing and
            conversations to explore what those changes mean
            for engineers, entrepreneurs and technology
            businesses.
          </p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col items-start border-t border-line py-7"
            >
              <span className="mb-4 text-xs text-accent">
                0{index + 1} /
              </span>
              <h3 className="mb-3 font-serif text-2xl">
                {item.title}
              </h3>
              <p className="mb-5">
                {item.description}
              </p>
              {item.url ? (
                <ExternalLink
                  href={item.url}
                  className="text-link mt-auto"
                >
                  Read article
                </ExternalLink>
              ) : (
                <span className="mt-auto text-xs text-muted">
                  Article to be added
                </span>
              )}
            </article>
          ))}
          <div className="flex flex-col justify-center border-t border-line py-7">
            <span
              aria-hidden="true"
              className="font-serif text-5xl text-accent"
            >
              “
            </span>
            <p className="font-serif text-2xl italic text-accent">
              Curiosity doesn’t end
              <br />
              with a chapter.
            </p>
            {profile.linkedin ? (
              <ExternalLink href={profile.linkedin}>
                Follow me on LinkedIn
              </ExternalLink>
            ) : (
              <p className="mt-4 text-xs">
                LinkedIn profile link to be added.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}