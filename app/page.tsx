import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import heroImage from "@/public/hero-image.svg"
import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/molecules/HeroSection"
import { ServicesGrid } from "@/components/organisms/ServicesGrid"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection heroImage={heroImage} />
      <ServicesGrid />


      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
            <Link href="#" className="text-black font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt={study.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link href="#" className="text-black font-medium flex items-center">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-16 bg-[#f3f3f3]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Working Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#b9ff66] flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black text-white p-8 rounded-lg">
                <p className="mb-6 text-lg">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#b9ff66]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start growing your business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn how Positivus can help your business grow.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-md">Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4">Positivus</h3>
              <p className="text-gray-400">Helping businesses navigate the digital landscape for success.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">Search Engine Optimization</Link>
                </li>
                <li>
                  <Link href="#">Pay-per-Click</Link>
                </li>
                <li>
                  <Link href="#">Social Media</Link>
                </li>
                <li>
                  <Link href="#">Email Marketing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Case Studies</Link>
                </li>
                <li>
                  <Link href="#">Guides</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@positivus.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Marketing St, New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Positivus. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Search Engine Optimization",
    description: "Improve your website's visibility on search engines and drive organic traffic to your business.",
  },
  {
    title: "Pay-per-Click Advertising",
    description: "Target your ideal customers with paid ads on search engines and social media platforms.",
  },
  {
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience on popular social media platforms.",
  },
]

const caseStudies = [
  {
    title: "Boosting Organic Traffic",
    description: "How we helped a SaaS company increase their organic traffic by 200% in 6 months.",
  },
  {
    title: "E-commerce Success",
    description: "Helping an online retailer achieve a 150% increase in conversion rates through strategic marketing.",
  },
  {
    title: "Brand Awareness Campaign",
    description: "Creating a comprehensive social media strategy that increased brand mentions by 80%.",
  },
]

const workingProcess = [
  {
    title: "Research",
    description: "We conduct thorough market research to understand your business needs and goals.",
  },
  {
    title: "Strategy",
    description: "Our team develops a customized marketing strategy tailored to your specific requirements.",
  },
  {
    title: "Implementation",
    description: "We execute the strategy with precision and attention to detail.",
  },
  {
    title: "Analysis",
    description: "Continuous monitoring and analysis to optimize performance and results.",
  },
]

const testimonials = [
  {
    quote:
      "Working with Positivus has been a game-changer for our business. Their strategic approach to digital marketing has helped us achieve remarkable growth.",
    name: "Sarah Johnson",
    position: "CEO, TechStart",
  },
  {
    quote:
      "The team at Positivus truly understands our business needs. Their expertise in SEO and PPC has significantly improved our online presence.",
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
  },
]

