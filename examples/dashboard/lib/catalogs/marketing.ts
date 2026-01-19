import { z } from "zod";

const actionSchema = z.object({
  label: z.string(),
  action: z.string(),
});

export const marketingComponents = {
  Hero: {
    props: z.object({
      title: z.string(),
      subtitle: z.string().nullable(),
      primaryAction: actionSchema.nullable(),
      secondaryAction: actionSchema.nullable(),
      align: z.enum(["left", "center", "right"]).nullable(),
      background: z.enum(["default", "muted", "accent"]).nullable(),
    }),
    hasChildren: true,
    description: "Landing page hero section with CTA buttons",
  },

  Feature: {
    props: z.object({
      title: z.string(),
      description: z.string().nullable(),
      icon: z.string().nullable(),
      align: z.enum(["left", "center"]).nullable(),
    }),
    description: "Single feature with icon and description",
  },

  FeatureGrid: {
    props: z.object({
      columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).nullable(),
      gap: z.enum(["sm", "md", "lg"]).nullable(),
      title: z.string().nullable(),
      subtitle: z.string().nullable(),
    }),
    hasChildren: true,
    description: "Grid container for feature components",
  },

  CTA: {
    props: z.object({
      title: z.string(),
      subtitle: z.string().nullable(),
      primaryAction: actionSchema.nullable(),
      secondaryAction: actionSchema.nullable(),
      background: z.enum(["default", "muted", "accent"]).nullable(),
      align: z.enum(["left", "center", "right"]).nullable(),
    }),
    description: "Call to action section with buttons",
  },
};
