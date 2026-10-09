export default function ExternalLink({
  href,
  children,
  className = 'text-link',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}