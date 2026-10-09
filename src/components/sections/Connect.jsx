import { profile } from '../../data';
import Label from '../common/Label';
import ExternalLink from '../common/ExternalLink';

export default function Connect() {
  return (
    <>
      <section className="bg-sage py-14 text-center sm:py-20">
        <div className="shell">
          <Label>The next chapter</Label>
          <h2 className="heading">
            I’m still <em>building.</em>
          </h2>
          <p className="mt-5 text-sm">
            The next decade will belong to products that can:
          </p>
          <div className="mx-auto my-6 flex max-w-md flex-wrap justify-center gap-x-6 gap-y-3 font-serif text-2xl text-accent sm:max-w-none sm:text-3xl">
            {[
              'See.',
              'Understand.',
              'Decide.',
              'Act.',
            ].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <p>
            That is the future I want to help build.
          </p>
        </div>
      </section>
      <section
        id="connect"
        className="shell section grid items-center gap-9 md:grid-cols-[1.2fr_0.85fr] md:gap-16"
      >
        <div>
          <Label>
            Let’s start a conversation
          </Label>
          <h2 className="heading mb-6">
            What’s your next
            <br />
            <em>technology challenge?</em>
          </h2>
          <div className="body-copy">
            <p>
              Maybe you are building an intelligent product,
              entering a new market or building an engineering
              organisation. Maybe you are looking for a strategic
              advisor or a technology partnership.
            </p>
            <p>
              Or maybe you simply want to exchange ideas about
              where technology is going.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-[#e0dce7] bg-lavender p-7">
          <span className="font-serif text-3xl text-[#80788a]">
            rn.
          </span>
          <h3 className="mt-5 mb-4 font-serif text-2xl">
            Good things start
            <br />
            with a conversation.
          </h3>
          {!profile.email && !profile.linkedin && (
            <p className="mb-5 text-sm">
              Direct contact details will be available here soon.
            </p>
          )}
          <div className="border-t border-[#d5d0dd] py-3">
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="text-link break-all"
              >
                {profile.email} ↗
              </a>
            ) : (
              <p className="flex justify-between gap-4 text-sm">
                <span>Email</span>
                <span>To be added</span>
              </p>
            )}
          </div>
          <div className="border-t border-[#d5d0dd] py-3">
            {profile.linkedin ? (
              <ExternalLink href={profile.linkedin}>
                Connect on LinkedIn
              </ExternalLink>
            ) : (
              <p className="flex justify-between gap-4 text-sm">
                <span>LinkedIn</span>
                <span>To be added</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}