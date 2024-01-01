export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Floreria",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Register",
      href: "/register",
    },
    {
      title: "Sign In",
      href: "/sign-in",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
