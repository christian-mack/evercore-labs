import { CustomAccordion } from "@/components/molecules/CustomAccordion";
import { ContactForm } from "@/components/organisms/ContactForm";
import { PricingPlans } from "@/components/organisms/PricingPlans";

const faqItems = [
  {
    question: "Are there any additional fees or charges that may apply?",
    answer: "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business."
  },
  {
    question: "Can I change or cancel my plan at any time?",
    answer: "Yes, you have the flexibility to modify or cancel your plan. We understand that business needs can change, and we're here to accommodate those changes. Please contact our support team to discuss any plan modifications."
  },
  {
    question: "Do you offer a free trial or consultation?",
    answer: "Yes, we offer a complimentary consultation to discuss your business needs and determine the best digital marketing strategy for your company. This allows us to understand your goals and provide tailored recommendations."
  },
  {
    question: "How do you bill and invoice your clients?",
    answer: "We provide detailed monthly invoices for our services. Payment terms are flexible and can be discussed during the consultation phase. We accept various payment methods to make the process convenient for our clients."
  },
  {
    question: "Are your services guaranteed to deliver results?",
    answer: "While we can't guarantee specific results due to various market factors, we are committed to using proven strategies and best practices. We provide regular reporting and analytics to track progress and make data-driven adjustments to optimize performance."
  },
  {
    question: "Do you offer contract-based or monthly retainer-based pricing?",
    answer: "We offer both contract-based and monthly retainer options to suit different business needs. Our flexible pricing structures can be customized based on your requirements and budget."
  }
];

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <div className="container mx-auto px-4 mb-24">
        {/* FAQ Section */}
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] text-black px-2 py-2 rounded-md text-3xl mb-4">
            Frequently Asked Questions
          </div>
        </div>
        <CustomAccordion items={faqItems} />
      </div>
      <ContactForm />
    </>
  );
} 