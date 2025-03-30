import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

const CustomAccordion = AccordionPrimitive.Root

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("rounded-[3rem] mb-4 overflow-hidden", className)}
    style={{ 
      borderLeft: '1px solid black',
      borderTop: '1px solid black',
      borderRight: '1px solid black',
      borderBottom: '5px solid black'
    }}
    {...props}
  />
))
CustomAccordionItem.displayName = "CustomAccordionItem"

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-12 px-12 text-xl font-medium transition-all bg-[#F3F3F3] rounded-[3rem] [&[data-state=open]]:bg-[#B9FF66] [&[data-state=open]>.plus-minus]:rotate-45 [&[data-state=open]]:rounded-b-none",
        className
      )}
      {...props}
    >
      {children}
      <div className="plus-minus h-12 w-12 rounded-full bg-white flex items-center justify-center transition-transform duration-200 border border-black">
        <Plus className="h-6 w-6" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
CustomAccordionTrigger.displayName = "CustomAccordionTrigger"

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-lg bg-[#B9FF66]"
    {...props}
  >
    <div className="px-12">
      <div className="border-t-2 border-black" />
      <div className={cn("pt-6 pb-12", className)}>{children}</div>
    </div>
  </AccordionPrimitive.Content>
))
CustomAccordionContent.displayName = "CustomAccordionContent"

// Plus icon component
function Plus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CustomAccordion, CustomAccordionItem, CustomAccordionTrigger, CustomAccordionContent } 