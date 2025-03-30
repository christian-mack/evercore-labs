import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/molecules/CustomAccordion"

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content: "We conduct thorough market research and develop a comprehensive strategy tailored to your business objectives and target audience."
  },
  {
    number: "03",
    title: "Implementation",
    content: "Our team executes the strategy with precision, implementing all planned marketing initiatives and campaigns."
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content: "We continuously monitor campaign performance and make data-driven optimizations to maximize results."
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content: "Regular reporting and open communication ensure you're always informed about progress and results."
  },
  {
    number: "06",
    title: "Continual Improvement",
    content: "We consistently refine and improve our strategies based on performance data and emerging trends."
  }
]

export function WorkingProcess() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <div className="bg-[#B9FF66] px-2 py-2 rounded-md">
          <h2 className="text-3xl font-medium">Our Working Process</h2>
        </div>
        <p className="text-xl max-w-[40%]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <CustomAccordion type="single" defaultValue="01" collapsible>
        {processSteps.map((step) => (
          <CustomAccordionItem key={step.number} value={step.number}>
            <CustomAccordionTrigger>
              <div className="flex items-center gap-6">
                <span className="text-[2.75rem] font-bold">{step.number}</span>
                <span className="text-2xl">{step.title}</span>
              </div>
            </CustomAccordionTrigger>
            <CustomAccordionContent>
              {step.content}
            </CustomAccordionContent>
          </CustomAccordionItem>
        ))}
      </CustomAccordion>
    </section>
  );
} 