import Link from 'next/link';
import Image from 'next/image';

function LinkedInIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="white"/>
      <path d="M12.6667 21.3333H10V13.3333H12.6667V21.3333ZM11.3333 12.1667C10.6 12.1667 10 11.5667 10 10.8333C10 10.1 10.6 9.5 11.3333 9.5C12.0667 9.5 12.6667 10.1 12.6667 10.8333C12.6667 11.5667 12.0667 12.1667 11.3333 12.1667ZM22 21.3333H19.3333V17.0833C19.3333 15.5833 18.6667 15.0833 17.8333 15.0833C17 15.0833 16.1667 15.8333 16.1667 17.1667V21.3333H13.5V13.3333H16.0833V14.5C16.3333 14 17.3 13 18.7 13C20.2667 13 21.9167 13.9167 21.9167 16.75V21.3333H22Z" fill="#1D1D1D"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="white"/>
      <path d="M21.3333 16.0001C21.3333 12.3167 18.35 9.33337 14.6667 9.33337C10.9833 9.33337 8 12.3167 8 16.0001C8 19.3167 10.3833 22.0834 13.5 22.5834V17.8334H11.8333V16.0001H13.5V14.5834C13.5 13.0001 14.4167 12.1667 15.8333 12.1667C16.5 12.1667 17.1667 12.3334 17.1667 12.3334V14.0001H16.3333C15.5 14.0001 15.1667 14.5001 15.1667 15.0001V16.0001H17.0833L16.8333 17.8334H14.8333V22.6667C18.2167 22.3334 21 19.4667 21.3333 16.0001Z" fill="#1D1D1D"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="white"/>
      <path d="M22.6667 11.8333C22 12.1666 21.3333 12.3333 20.5833 12.4166C21.3333 12 21.9167 11.25 22.1667 10.4166C21.5 10.8333 20.75 11.0833 19.9167 11.25C19.25 10.5 18.3333 10.0833 17.3333 10.0833C15.4167 10.0833 13.8333 11.6666 13.8333 13.5833C13.8333 13.8333 13.8333 14.0833 13.9167 14.3333C11 14.1666 8.41667 12.75 6.66667 10.5833C6.41667 11.0833 6.25 11.6666 6.25 12.3333C6.25 13.5 6.83333 14.5833 7.83333 15.1666C7.25 15.1666 6.66667 15 6.16667 14.75V14.8333C6.16667 16.5 7.41667 17.9166 9 18.25C8.75 18.3333 8.41667 18.3333 8.16667 18.3333C7.91667 18.3333 7.75 18.3333 7.5 18.25C7.91667 19.6666 9.25 20.6666 10.75 20.6666C9.5 21.5833 8 22.0833 6.41667 22.0833C6.16667 22.0833 5.91667 22.0833 5.66667 22C7.16667 23 9 23.5833 10.9167 23.5833C17.3333 23.5833 20.8333 18.4166 20.8333 13.9166V13.5C21.5833 13 22.1667 12.4166 22.6667 11.8333Z" fill="#1D1D1D"/>
    </svg>
  )
}

export function Footer() {
  return (
    <div className="container mx-auto px-4">
      <footer className="bg-[#1D1D1D] text-white py-16 px-24 rounded-t-[2rem]">
        <div className="flex justify-between items-start mb-16">
          {/* Logo and Navigation */}
          <div className="flex gap-24">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image 
                src="/logo-white.svg" 
                alt="Evercore Labs" 
                width={150}
                height={40}
              />
            </Link>
            <nav className="flex gap-8">
              <Link href="/about-us" className="hover:text-[#B9FF66] transition-colors">About us</Link>
              <Link href="/services" className="hover:text-[#B9FF66] transition-colors">Services</Link>
              <Link href="/use-cases" className="hover:text-[#B9FF66] transition-colors">Use Cases</Link>
              <Link href="/pricing" className="hover:text-[#B9FF66] transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-[#B9FF66] transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link href="#" aria-label="Twitter">
              <TwitterIcon />
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-8 mb-16">
          {/* Contact Information */}
          <div className="max-w-md">
            <div className="inline-block bg-[#B9FF66] text-black px-2 py-1 rounded-md mb-6">
              Contact us:
            </div>
            <div className="space-y-2 text-lg">
              <p>Email: info@evercorelabs.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-[#292929] py-4 px-8 rounded-3xl max-w-xl w-full flex items-center">
            <div className="flex gap-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow bg-transparent border border-white rounded-md px-6 py-4 text-white placeholder-white"
              />
              <button className="bg-[#B9FF66] text-black px-8 py-4 rounded-md hover:bg-[#a8ff44] transition-colors whitespace-nowrap">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Privacy */}
        <div className="flex justify-between items-center pt-8 border-t border-white/20">
          <p>© 2025 Evercore Labs. All Rights Reserved.</p>
          <Link href="/privacy-policy" className="hover:text-[#B9FF66] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
} 