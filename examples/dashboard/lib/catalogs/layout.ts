import { z } from "zod";

export const layoutComponents = {
  Container: {
    props: z.object({
      maxWidth: z.enum(["sm", "md", "lg", "xl", "full"]).nullable(),
      padding: z.enum(["none", "sm", "md", "lg"]).nullable(),
      center: z.boolean().nullable(),
    }),
    hasChildren: true,
    description: "Max-width wrapper with padding and centering",
  },

  Tabs: {
    props: z.object({
      defaultTab: z.string().nullable(),
      tabs: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
        }),
      ),
    }),
    hasChildren: true,
    description: "Tabbed content navigation using Radix Tabs",
  },

  TabPanel: {
    props: z.object({}),
    hasChildren: true,
    description: "Content panel for a tab",
  },

  Section: {
    props: z.object({
      title: z.string().nullable(),
      subtitle: z.string().nullable(),
      background: z.enum(["default", "muted", "accent"]).nullable(),
      padding: z.enum(["sm", "md", "lg", "xl"]).nullable(),
    }),
    hasChildren: true,
    description: "Page section with title and background options",
  },

  Navbar: {
    props: z.object({
      logo: z
        .object({
          text: z.string().nullable(),
          src: z.string().nullable(),
        })
        .nullable(),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string().nullable(),
            action: z.string().nullable(),
          }),
        )
        .nullable(),
      sticky: z.boolean().nullable(),
    }),
    description: "Navigation header with logo and links",
  },

  Footer: {
    props: z.object({
      columns: z
        .array(
          z.object({
            title: z.string(),
            links: z.array(
              z.object({
                label: z.string(),
                href: z.string().nullable(),
              }),
            ),
          }),
        )
        .nullable(),
      copyright: z.string().nullable(),
      background: z.enum(["default", "muted"]).nullable(),
    }),
    description: "Site footer with columns and links",
  },
};
