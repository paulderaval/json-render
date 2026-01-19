import { z } from "zod";

export const formComponents = {
  Checkbox: {
    props: z.object({
      label: z.string(),
      bindPath: z.string(),
      disabled: z.boolean().nullable(),
      description: z.string().nullable(),
    }),
    description: "Boolean checkbox input using Radix Checkbox",
  },

  Toggle: {
    props: z.object({
      label: z.string(),
      bindPath: z.string(),
      disabled: z.boolean().nullable(),
      description: z.string().nullable(),
      size: z.enum(["sm", "md", "lg"]).nullable(),
    }),
    description: "On/off switch using Radix Switch",
  },

  Radio: {
    props: z.object({
      label: z.string().nullable(),
      bindPath: z.string(),
      options: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          description: z.string().nullable(),
        }),
      ),
      disabled: z.boolean().nullable(),
      direction: z.enum(["horizontal", "vertical"]).nullable(),
    }),
    description: "Single selection radio group using Radix RadioGroup",
  },

  Textarea: {
    props: z.object({
      label: z.string().nullable(),
      bindPath: z.string(),
      placeholder: z.string().nullable(),
      rows: z.number().nullable(),
      resize: z.enum(["none", "vertical", "horizontal", "both"]).nullable(),
      disabled: z.boolean().nullable(),
      checks: z
        .array(
          z.object({
            fn: z.string(),
            message: z.string(),
          }),
        )
        .nullable(),
      validateOn: z.enum(["change", "blur", "submit"]).nullable(),
    }),
    description: "Multi-line text input",
  },
};
