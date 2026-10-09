import { ventures } from '../../data';
import Label from '../common/Label';

export default function Ventures() {
  return (
    <section id="ventures" className="shell section">
      <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
        <div>
          <Label>Chapter 05 · The Entrepreneur</Label>
          <h2 className="heading">
            Ideas into enterprise.
            <br />
            <em>Opportunity into execution.</em>
          </h2>
        </div>
        <p>
          I founded Engen Consulting & Business Solutions to help
          technology companies navigate the space between
          opportunity and execution.
        </p>
      </div>
      <div className="border-t border-line">
        {ventures.map((venture) => (
          <article
            key={venture.name}
            className="grid grid-cols-[44px_1fr] gap-4 border-b border-line py-7 md:grid-cols-[48px_1fr_1fr] md:items-center md:gap-7"
          >
            <span
              aria-hidden="true"
              className={`flex h-11 w-11 items-center justify-center rounded-xl font-serif text-2xl ${venture.color}`}
            >
              {venture.initial}
            </span>
            <div>
              <Label>{venture.name}</Label>
              <h3 className="text-lg leading-7">
                {venture.title}
              </h3>
            </div>
            <p className="col-start-2 md:col-auto">
              {venture.description}
            </p>
          </article>
        ))}
      </div>
      <p className="note mt-6">
        Official venture logos, websites, founding years and
        current scale to be added.
      </p>
    </section>
  );
}