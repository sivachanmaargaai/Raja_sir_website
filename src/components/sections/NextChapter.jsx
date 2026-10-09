import { opportunities } from '../../data';
import Label from '../common/Label';
import Text from '../common/Text';

export default function NextChapter() {
  return (
    <section className="shell section grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
      <div>
        <Label>
          Chapter 08 · What I’m Building Next
        </Label>
        <h2 className="heading">
          The next chapter
          <br />
          is about <em>building.</em>
        </h2>
        <p className="mt-6">
          The next chapter is not about looking back.
          It is about building.
        </p>
        <a href="#connect" className="text-link mt-5">
          Let’s explore what’s next ↗
        </a>
      </div>
      <div className="border-t border-line">
        {opportunities.map((item, index) => (
          <details
            key={item.title}
            open={index === 0}
            className="border-b border-line"
          >
            <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-5">
              <span className="flex items-center gap-4">
                <span className="text-xs text-accent">
                  0{index + 1}
                </span>
                {item.title}
              </span>
              <span
                className="plus text-xl transition-transform"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="space-y-5 pb-6 pl-8">
              <Text paragraphs={item.paragraphs} />
              {item.note && (
                <p className="note">
                  {item.note}
                </p>
              )}
              {item.cta && (
                <a
                  href={item.href}
                  className="text-link"
                >
                  {item.cta} ↗
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}