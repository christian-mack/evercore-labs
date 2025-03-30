import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
} 