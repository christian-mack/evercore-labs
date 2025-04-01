'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ContactForm() {
  const [formType, setFormType] = useState<'say-hi' | 'quote'>('say-hi');

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="bg-gray-100 rounded-3xl p-12 pr-0 relative overflow-hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#B9FF66] text-black px-2 py-2 rounded-md text-xl mb-4">
            Contact Us
          </div>
          <h2 className="text-2xl font-medium">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </h2>
        </div>

        {/* Form */}
        <div className="max-w-2xl">
          {/* Radio Options */}
          <div className="flex gap-8 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="formType"
                  value="say-hi"
                  checked={formType === 'say-hi'}
                  onChange={(e) => setFormType('say-hi')}
                  className="appearance-none w-6 h-6 border-2 border-black rounded-full"
                />
                {formType === 'say-hi' && (
                  <div className="absolute w-3 h-3 bg-[#B9FF66] rounded-full"></div>
                )}
              </div>
              <span>Say Hi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="formType"
                  value="quote"
                  checked={formType === 'quote'}
                  onChange={(e) => setFormType('quote')}
                  className="appearance-none w-6 h-6 border-2 border-black rounded-full"
                />
                {formType === 'quote' && (
                  <div className="absolute w-3 h-3 bg-[#B9FF66] rounded-full"></div>
                )}
              </div>
              <span>Get a Quote</span>
            </label>
          </div>

          {/* Form Fields */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-6 py-4 rounded-lg border-2 border-black bg-white"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-6 py-4 rounded-lg border-2 border-black bg-white"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message*</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-6 py-4 rounded-lg border-2 border-black bg-white resize-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1D1D1D] text-white px-12 py-4 rounded-lg hover:bg-black transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute right-[-25%] top-1/2 -translate-y-1/2">
          <Image
            src="/illustrations/contact-form.svg"
            alt="Contact form decoration"
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
} 