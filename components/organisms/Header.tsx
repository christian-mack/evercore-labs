"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  companyName?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaOnClick?: () => void;
}

export function Header({
  companyName = "Evercore Labs",
  navItems = [
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Use cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  ctaText = "Request a quote",
  ctaOnClick,
}: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className={cn(
              "font-bold text-xl font-sans",
              pathname === "/" && "pointer-events-none"
            )}
          >
            {companyName}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={index} 
                href={item.href} 
                className={cn(
                  "text-sm font-medium px-2 py-1 rounded-md transition-colors",
                  isActive && "bg-[#b9ff66] pointer-events-none"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Button 
            className="bg-[#b9ff66] text-black hover:bg-[#a8e85c] rounded-md"
            onClick={ctaOnClick}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </header>
  );
}