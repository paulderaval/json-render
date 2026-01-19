import { z } from "zod";

export const dataComponents = {
  Progress: {
    props: z.object({
      valuePath: z.string().nullable(),
      value: z.number().nullable(),
      max: z.number().nullable(),
      label: z.string().nullable(),
      showValue: z.boolean().nullable(),
      variant: z.enum(["default", "success", "warning", "danger"]).nullable(),
      size: z.enum(["sm", "md", "lg"]).nullable(),
    }),
    description: "Progress bar with variants",
  },

  Stat: {
    props: z.object({
      label: z.string(),
      valuePath: z.string().nullable(),
      value: z.union([z.string(), z.number()]).nullable(),
      format: z.enum(["number", "currency", "percent"]).nullable(),
      icon: z.string().nullable(),
      helpText: z.string().nullable(),
      trend: z.enum(["up", "down", "neutral"]).nullable(),
      trendValue: z.string().nullable(),
    }),
    description: "Enhanced metric display with icon and help text",
  },

  DataList: {
    props: z.object({
      items: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            valuePath: z.string().nullable(),
          }),
        )
        .nullable(),
      dataPath: z.string().nullable(),
      striped: z.boolean().nullable(),
      divided: z.boolean().nullable(),
    }),
    description: "Key-value pair display list",
  },

  Avatar: {
    props: z.object({
      src: z.string().nullable(),
      alt: z.string().nullable(),
      name: z.string().nullable(),
      size: z.enum(["sm", "md", "lg", "xl"]).nullable(),
      fallbackColor: z.string().nullable(),
    }),
    description: "User image or initials avatar",
  },

  Code: {
    props: z.object({
      content: z.string(),
      variant: z.enum(["default", "subtle"]).nullable(),
    }),
    description: "Inline code styling",
  },
};
