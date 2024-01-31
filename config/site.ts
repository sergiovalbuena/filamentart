export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Floreria",
  description:
    "Easy to use, custom and order flowers online. We have a wide variety of flowers for all occasions. We deliver to your home or office.",
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
