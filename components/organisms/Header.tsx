import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    { label: "About us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Use cases", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
  ],
  ctaText = "Request a quote",
  ctaOnClick,
}: HeaderProps) {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl">{companyName}</div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium">
              {item.label}
            </Link>
          ))}
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