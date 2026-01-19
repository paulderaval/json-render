import { z } from "zod";

export const contentComponents = {
  Callout: {
    props: z.object({
      type: z.enum(["info", "warning", "success", "error", "tip"]).nullable(),
      title: z.string().nullable(),
    }),
    hasChildren: true,
    description: "Info/warning/tip callout boxes",
  },

  CodeBlock: {
    props: z.object({
      code: z.string(),
      language: z.string().nullable(),
      showLineNumbers: z.boolean().nullable(),
      title: z.string().nullable(),
    }),
    description: "Syntax-highlighted code block",
  },
};
