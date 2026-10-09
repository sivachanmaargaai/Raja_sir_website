import { profile } from '../../data';

export default function Brand() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3"
      aria-label="Raja Narayanasamy home"
    >
      <span className="border-r border-line pr-3 font-serif text-3xl tracking-tighter">
        rn.
      </span>
      <span className="text-xs font-semibold sm:text-sm">
        {profile.name}
      </span>
    </a>
  );
}