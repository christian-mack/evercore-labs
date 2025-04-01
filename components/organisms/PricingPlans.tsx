'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Basic Plan",
    price: "500",
    features: [
      "Website optimization",
      "Social media setup and management (1 platform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit"
    ]
  },
  {
    name: "Pro Plan",
    price: "1000",
    popular: true,
    features: [
      "Includes all from the Basic Plan",
      "Social media setup and management (up to 3 platforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations"
    ]
  },
  {
    name: "Elite Plan",
    price: "2000",
    features: [
      "Includes all from the Pro Plan",
      "Website design and development",
      "Comprehensive SEO strategy",
      "Social media setup and management (up to 5 platforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting"
    ]
  }
];

export function PricingPlans() {
  return (
    <section className="container mx-auto px-4 mb-24">
      {/* Header */}
      <div className="mb-24 mt-24">
        <h1 className="text-6xl font-medium mb-8">Pricing</h1>
        <p className="text-xl text-gray-600">
          Elevate Your Online Presence: Competitive Pricing for Exceptional Results
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-3xl border-t border-l border-r border-b-[5px] border-black flex flex-col relative",
              plan.popular ? "bg-[#1D1D1D] text-white" : "bg-white"
            )}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-medium">{plan.name}</h3>
                {plan.popular && (
                  <div className="bg-[#B9FF66] text-black px-4 py-1 rounded-full text-sm">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-medium">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <div className="space-y-4 mb-16">
                <Link
                  href="/contact"
                  className={cn(
                    "block text-center py-4 rounded-xl transition-colors",
                    plan.popular
                      ? "bg-[#B9FF66] text-black hover:bg-[#a8ff44]"
                      : "bg-[#1D1D1D] text-white hover:bg-black"
                  )}
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "block text-center py-4 rounded-xl transition-colors border-2",
                    plan.popular
                      ? "border-white hover:bg-white hover:text-black"
                      : "border-black hover:bg-black hover:text-white"
                  )}
                >
                  Request a quote
                </Link>
              </div>

              <div className={cn(
                "h-px w-full mb-8",
                plan.popular ? "bg-white/20" : "bg-black/20"
              )} />

              <div className="space-y-6 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={cn(
                      "rounded-full p-0.5",
                      plan.popular ? "bg-[#B9FF66]" : "bg-[#B9FF66]"
                    )}>
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 