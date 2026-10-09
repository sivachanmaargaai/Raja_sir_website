import { beliefs } from '../../data';
import Label from '../common/Label';

export default function BeyondAndBeliefs() {
  return (
    <>
      <section className="shell">
        <div className="grid items-center gap-8 rounded-lg bg-peach p-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-10">
          <div
            aria-hidden="true"
            className="flex h-48 items-center justify-center"
          >
            <span className="h-28 w-20 -rotate-12 rounded-t-full bg-[#d9c9b6]" />
            <span className="z-10 -mx-3 h-40 w-24 rounded-t-full bg-[#c7ceb9]" />
            <span className="h-28 w-20 rotate-12 rounded-t-full bg-[#d2c7d8]" />
          </div>
          <div>
            <Label>
              Contributing to the ecosystem
            </Label>
            <h2 className="heading mb-5">
              Beyond <em>business.</em>
            </h2>
            <p>
              I also contribute to the broader technology
              ecosystem through industry initiatives and
              technology discussions. I am involved in
              initiatives around robotics, drones and automation.
            </p>
            <p className="note mt-5">
              Industry event photos, CII committee name,
              appointment details, responsibilities and
              initiatives to be added.
            </p>
          </div>
        </div>
      </section>
      <section className="shell section">
        <Label>The ideas that guide me</Label>
        <h2 className="heading mb-9">
          A few things <em>I believe.</em>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-14">
          {beliefs.map((item, index) => (
            <article
              key={item.title}
              className="grid grid-cols-[20px_1fr] gap-3 border-t border-line pt-6"
            >
              <span className="pt-1 text-xs text-accent">
                0{index + 1}
              </span>
              <div>
                <h3 className="mb-4 font-serif text-2xl">
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}