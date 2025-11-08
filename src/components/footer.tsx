import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://twitter.com",
      icon: IconBrandX,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: IconBrandLinkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: IconBrandInstagram,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-neutral-100 to-[#f4f4f4] py-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Footer Content - 2 Sections */}
        <div className="mb-8 flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left: Brand Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 text-shadow-sm md:text-5xl">
              Navdeep Singh
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
              Crafting digital experiences with creativity and innovation
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-start">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 transition-all duration-300 hover:scale-110 hover:bg-neutral-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Rights Reserved */}
        <div className="border-t border-neutral-300 pt-6">
          <p className="text-center text-sm text-neutral-600">
            © {currentYear} Navdeep Singh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
