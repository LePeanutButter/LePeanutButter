import { contactLinks } from "@/src/config/site";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-border-subtle py-16">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-muted">
          2026 Santiago Botero Garcia. Built with restrained systems thinking.
        </p>
        <ul className="flex gap-8">
          {contactLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-sm font-medium text-ink-secondary transition-colors duration-500 ease-premium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:origin-bottom-left hover:after:scale-x-100">
                {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
