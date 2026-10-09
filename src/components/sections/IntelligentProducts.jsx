import { profile } from '../../data';
import Label from '../common/Label';
import ExternalLink from '../common/ExternalLink';

export default function IntelligentProducts() {
  const steps = [
    'Sense',
    'Understand',
    'Decide',
    'Act',
  ];
  return (
    <section
      id="intelligent-products"
      className="section bg-[#e8eddf]"
    >
      <div className="shell">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <Label>
              Chapter 06 · When AI Leaves the Screen
            </Label>
            <h2 className="heading mb-6">
              What happens when AI can{' '}
              <em>see, understand and act?</em>
            </h2>
            <div className="body-copy">
              <p>
                Technology is entering another major transition.
                For years, much of AI lived inside computers,
                applications and cloud platforms. Now AI is
                moving into the physical world.
              </p>
              <p>
                Machines can see. Devices can understand.
                Systems can make decisions. Products can respond
                to their environment. This is the space that
                increasingly interests me.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Vision AI',
                'Edge AI',
                'AIoT',
                'Embedded Intelligence',
                'Physical AI',
              ].map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-t-[90px] rounded-b-xl border border-[#bdc9ae] bg-paper/50 px-6 py-10">
            <p className="mb-7 text-center text-xs tracking-[0.2em] text-ink">
              INTELLIGENT PRODUCTS
            </p>
            <ol className="mx-auto max-w-60">
              {steps.map((step, index) => (
                <li key={step}>
                  <div className="flex items-center gap-4 rounded-lg border border-[#c5d0b9] bg-paper px-5 py-3">
                    <span className="text-xs text-accent">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-xl">
                      {step}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="block text-center text-accent"
                    >
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 grid gap-6 border-t border-[#cbd5c0] pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
          <div>
            <Label>In focus · Nemilink</Label>
            <h3 className="font-serif text-2xl">
              Building Intelligent Products
            </h3>
          </div>
          <div className="body-copy">
            <p>
              At Nemilink, we are exploring what happens when
              intelligence becomes part of the product itself.
            </p>
            <p>
              From industrial Vision AI and Edge AI to embedded
              systems and intelligent machines, the focus is on
              solving real-world problems where software meets
              hardware, data and physical environments.
            </p>
            <p className="text-sm text-ink">
              Connected Products → Intelligent Products →
              Autonomous Systems
            </p>
            {profile.nemilinkUrl ? (
              <ExternalLink href={profile.nemilinkUrl}>
                Explore Nemilink
              </ExternalLink>
            ) : (
              <p className="note">
                Nemilink website and selected product demos
                to be added.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}