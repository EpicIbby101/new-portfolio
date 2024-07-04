"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";
import github from "@/app/github-logo.png";
import linkedin from "@/app/linkedin.png";
import email from "@/app/email.png";
import config from "@/config";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/#testimonials",
    label: "About Me",
  },
  {
    href: "/#faq",
    label: "My Blog",
  },
  {
    href: "/sign-in",
    label: "Contact Me",
  },
];

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200 fixed top-0 w-full z-50">
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-10"
              placeholder="blur"
              priority={true}
            />
            <span className="font-extrabold text-2xl">{config.appName}</span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center lg:justify-end lg:flex-1">
          {/* Your links on large screens */}
          <div className="hidden lg:flex lg:justify-center lg:gap-3 lg:items-center">
            {links.map((link, index) => (
              <>
                <Link
                  href={link.href}
                  key={link.href}
                  className="link link-hover"
                  title={link.label}
                >
                  {link.label}
                </Link>
                {index <= links.length - 1 && (
                  <span className="border-l border-gray-300 h-6 mx-2"></span>
                )}
              </>
            ))}
          </div>

          {/* CTA on large screens */}
          {/* <div className="hidden lg:flex lg:ml-6 ">{cta}</div> */}
          <div className="hidden lg:flex ml-3 space-x-3">
            <Link
              className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
              href="https://www.linkedin.com/in/kevin-grittner-770465243/"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className="w-10"
                placeholder="blur"
                priority={true}
              />
            </Link>
            <Link
              className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
              href="https://github.com/EpicIbby101"
            >
              <Image
                src={github}
                alt="github"
                className="w-10"
                placeholder="blur"
                priority={true}
              />
            </Link>
            <Link
              className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
              href="mailto:kevin_grittner@outlook.com"
            >
              <Image
                src={email}
                alt="email"
                className="w-10"
                placeholder="blur"
                priority={true}
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-row space-x-3">
              <Link
                className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
                href="https://www.linkedin.com/in/kevin-grittner-770465243/"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-10"
                  placeholder="blur"
                  priority={true}
                />
              </Link>
              <Link
                className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
                href="https://github.com/EpicIbby101"
              >
                <Image
                  src={github}
                  alt="github"
                  className="w-10"
                  placeholder="blur"
                  priority={true}
                />
              </Link>
              <Link
                className="flex items-center gap-2 shrink-0 hover:scale-110 transition-all duration-200"
                href="mailto:kevin_grittner@outlook.com"
              >
                <Image
                  src={email}
                  alt="email"
                  className="w-10"
                  placeholder="blur"
                  priority={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
