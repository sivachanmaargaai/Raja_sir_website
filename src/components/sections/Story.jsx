import { chapters } from '../../data';
import Label from '../common/Label';
import Text from '../common/Text';

export default function Story() {
  return (
    <div id="story">
      <section className="shell section grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <Label>The story so far</Label>
          <h2 className="heading">
            It started
            <br />
            with <em>engineering.</em>
          </h2>
        </div>
        <div className="body-copy">
          <p>
            I began my career as an engineer. Like many engineers,
            my first instinct was to understand how things worked
            — and then figure out how to make them work better.
          </p>
          <p>
            Over the years, engineering became much more than
            writing code or designing systems. I learned that
            successful technology requires three things to come
            together:
          </p>
          <ol className="space-y-3 py-3">
            {[
              'Good engineering.',
              'The right people.',
              'A clear business purpose.',
            ].map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-4 font-serif text-xl"
              >
                <span className="font-sans text-xs text-accent">
                  0{index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p>
            That lesson has shaped almost everything I have done
            since.
          </p>
        </div>
      </section>
      <section className="section border-y border-line bg-[#efeee7]">
        <div className="shell">
          <Label>
            Engineering → Organisations → Enterprise
          </Label>
          <h2 className="heading mb-10">
            A journey of <em>building.</em>
          </h2>
          <div className="max-w-4xl">
            {chapters.map((chapter) => (
              <article
                key={chapter.number}
                className="relative grid grid-cols-[32px_1fr] gap-4 pb-10 last:pb-0 sm:grid-cols-[46px_1fr] sm:gap-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-10 bottom-0 left-4 w-px bg-line sm:left-[23px]"
                />
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#b7c4af] bg-[#efeee7] font-serif text-xs sm:h-11 sm:w-11">
                  {chapter.number}
                </span>
                <div className="min-w-0">
                  <Label>{chapter.label}</Label>
                  <h3 className="mb-5 font-serif text-2xl sm:text-3xl">
                    {chapter.title}
                  </h3>
                  {chapter.lead && (
                    <p className="mb-4 text-lg text-ink">
                      {chapter.lead}
                    </p>
                  )}
                  <Text paragraphs={chapter.paragraphs} />
                  {chapter.timeline && (
                    <ol className="my-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                      {chapter.timeline.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-[#bdc8b2] pl-3 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                  {chapter.more && (
                    <details className="mt-5 border-b border-line">
                      <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 py-3 text-sm">
                        More about this chapter
                        <span
                          className="plus text-xl transition-transform"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <div className="py-4">
                        <Text paragraphs={chapter.more} />
                      </div>
                    </details>
                  )}
                  {chapter.milestone && (
                    <div className="my-6 flex flex-wrap gap-7 rounded border border-[#cdd8c1] bg-sage p-5">
                      <div>
                        <strong className="block font-serif text-3xl font-normal sm:text-4xl">
                          120+
                        </strong>
                        <span className="text-xs">
                          engineers
                        </span>
                      </div>
                      <div className="border-l border-[#b7c3ab] pl-7">
                        <strong className="block font-serif text-3xl font-normal sm:text-4xl">
                          3 years
                        </strong>
                        <span className="text-xs">
                          to build the capability
                        </span>
                      </div>
                    </div>
                  )}
                  {chapter.quote && (
                    <blockquote className="my-6 font-serif text-xl italic text-accent">
                      “{chapter.quote}”
                    </blockquote>
                  )}
                  {chapter.note && (
                    <p className="note mt-5">
                      {chapter.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}