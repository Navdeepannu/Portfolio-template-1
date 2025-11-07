"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    budget: "",
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
          budget: "",
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
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
        {/* Top Section with Name and Status */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h1 className="font-serif text-2xl italic text-black md:text-3xl">
            Emile Jones
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-neutral-600">available for work</span>
          </div>
        </div>

        {/* Section Label */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black" />
          <span className="text-sm font-medium text-black">Contact</span>
        </div>

        {/* Heading */}
        <h2 className="font-times-heading mb-20 md:mb-24 max-w-xl text-[36px] leading-tight tracking-tight text-black md:text-[42px]">
          Reach out and let's bring your vision to life
        </h2>

        {/* Contact Form */}
        <div className="mx-auto max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-neutral-50 p-8"
          >
            {/* Full Name and Email */}
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-neutral-700"
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
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-700"
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
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Website */}
            <div className="mb-6">
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Website (optional)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Company Website"
                className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* Budget */}
            <div className="mb-6">
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Select Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none"
              >
                <option value="">Select...</option>
                <option value="less-than-5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="more-than-50k">More than $50,000</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-700"
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
                className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mb-6 w-full rounded-xl bg-black py-4 text-sm font-medium text-white transition-all duration-200",
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
            <div className="flex items-center gap-3 rounded-lg bg-white p-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">
                  navdeepanuu1@gmail.com
                </p>
                <p className="text-xs text-neutral-600">
                  reply within 24 hrs
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-neutral-700">
                  AVAILABLE
                </span>
              </div>
            </div>
          </form>

          {/* Book a Call */}
          <div className="mt-8 flex items-center justify-between">
            <p className="font-serif text-lg italic text-neutral-600">
              Preffer to Book a call ?
            </p>
            <a
              href="https://cal.com/navdeepannu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black underline transition-colors hover:text-neutral-600"
            >
              Book a call anytime
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
