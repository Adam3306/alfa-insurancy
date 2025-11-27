import Link from "next/link";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="pt-20 pb-4 px-4 sm:px-12 lg:px-24 bg-gradient-to-b from-primary-blue to-secondary-blue border-b border-highlight-blue/30"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm font-telegraf">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-highlight-blue mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-highlight-blue hover:text-yellow-400 transition-colors font-medium px-2 py-1 rounded hover:bg-highlight-blue/10"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`px-2 py-1 rounded ${
                  index === items.length - 1
                    ? "text-white font-bold bg-highlight-blue/20"
                    : "text-highlight-blue"
                }`}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

