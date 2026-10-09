import { profile, navigation } from '../../data';
import Brand from '../common/Brand';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell pt-9">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div>
            <Brand />
            <p className="mt-4 text-xs leading-6">
              {profile.roles}
            </p>
            <p className="mt-1 text-xs leading-6">
              {profile.focus}
            </p>
          </div>
          <a className="text-link self-start" href="#top">
            Back to top ↑
          </a>
        </div>
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-line py-5 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}.
            All rights reserved.
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5"
          >
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex min-h-11 items-center"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}