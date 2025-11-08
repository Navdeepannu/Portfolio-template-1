"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          website: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `An error occurred. Please try again later. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative border-t border-dashed border-neutral-200 bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-6 lg:px-12">
        {/* Section Label */}
        <div className="mb-6 flex items-center gap-2 md:mb-5 lg:mb-6">
          <div className="h-2 w-2 rounded-full bg-black md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
          <span className="text-sm font-medium text-black md:text-[13px] lg:text-sm">
            Contact
          </span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Heading */}
          <div>
            <h2 className="font-times-heading text-[36px] leading-tight tracking-tight text-black md:text-[36px] lg:text-[42px]">
              Reach out and let&apos;s bring your vision to life
            </h2>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-neutral-50 p-8 md:rounded-2xl md:p-6 lg:rounded-3xl lg:p-8"
            >
              {/* Full Name and Email - Same Line */}
              <div className="mb-6 grid grid-cols-1 gap-4 md:mb-5 md:grid-cols-2 md:gap-3 lg:mb-6 lg:gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-neutral-700 md:mb-1.5 md:text-[13px] lg:mb-2 lg:text-sm"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ikta Solilonk"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none md:px-3 md:py-2.5 md:text-[13px] lg:px-4 lg:py-3 lg:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-700 md:mb-1.5 md:text-[13px] lg:mb-2 lg:text-sm"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="portal@support.com"
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none md:px-3 md:py-2.5 md:text-[13px] lg:px-4 lg:py-3 lg:text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6 md:mb-5 lg:mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-700 md:mb-1.5 md:text-[13px] lg:mb-2 lg:text-sm"
                >
                  How may we assist you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Give us more info..."
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none md:px-3 md:py-2.5 md:text-[13px] lg:px-4 lg:py-3 lg:text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "mb-6 w-full rounded-xl bg-black py-4 text-sm font-medium text-white transition-all duration-200 md:mb-5 md:rounded-lg md:py-3 md:text-[13px] lg:mb-6 lg:rounded-xl lg:py-4 lg:text-sm",
                  "hover:bg-neutral-800",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Your Message"}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={cn(
                    "mb-6 rounded-lg p-4 text-sm",
                    submitStatus.type === "success" &&
                      "bg-green-50 text-green-800",
                    submitStatus.type === "error" && "bg-red-50 text-red-800",
                  )}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Contact Info */}
              <div className="flex items-center gap-3 rounded-lg bg-white p-4 md:gap-2.5 md:p-3 lg:gap-3 lg:p-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-200 md:h-8 md:w-8 lg:h-10 lg:w-10">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900 md:text-[13px] lg:text-sm">
                    navdeepanuu1@gmail.com
                  </p>
                  <p className="text-xs text-neutral-600 md:text-[11px] lg:text-xs">
                    reply within 24 hrs
                  </p>
                </div>
                <div className="flex items-center gap-2 md:gap-1.5 lg:gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
                  <span className="text-xs font-medium text-neutral-700 md:text-[11px] lg:text-xs">
                    AVAILABLE
                  </span>
                </div>
              </div>
            </form>

            {/* Book a Call */}
            <div className="mt-8 flex items-center justify-between md:mt-6 lg:mt-8">
              <p className="font-serif text-lg text-neutral-600 italic md:text-base lg:text-lg">
                Preffer to Book a call ?
              </p>
              <a
                href="https://cal.com/navdeepannu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black underline transition-colors hover:text-neutral-600 md:text-[13px] lg:text-sm"
              >
                Book a call anytime
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
