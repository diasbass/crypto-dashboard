'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/solid"; // Ícone de Home

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    const label = part.charAt(0).toUpperCase() + part.slice(1);
    return { href, label };
  });

  return (
    <nav className="px-6 py-4 bg-white dark:bg-black text-black dark:text-white">      
      <ol className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1">
        <li>
          <Link href="/" className="flex items-center hover:underline gap-1">
            <HomeIcon className="h-4 w-4 text-yellow-400" />
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {index === crumbs.length - 1 ? (
              <span className="font-semibold text-gray-700 dark:text-gray-200">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
