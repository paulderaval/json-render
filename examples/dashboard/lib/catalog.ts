import { createCatalog } from "@json-render/core";
import { z } from "zod";
import { chartComponents } from "./catalogs/charts";
import { layoutComponents } from "./catalogs/layout";
import { dataComponents } from "./catalogs/data";
import { formComponents } from "./catalogs/forms";
import { contentComponents } from "./catalogs/content";
import { marketingComponents } from "./catalogs/marketing";

/**
 * Dashboard component catalog
 *
 * This defines the ONLY components that the AI can generate.
 * It acts as a guardrail - the AI cannot create arbitrary HTML/CSS.
 *
 * Note: OpenAI structured output requires all fields to be required.
 * Use .nullable() instead of .optional() for optional fields.
 */
export const dashboardCatalog = createCatalog({
  name: "dashboard",
  components: {
    // ============================================
    // EXISTING COMPONENTS (kept for backwards compatibility)
    // ============================================

    // Layout Components
    Card: {
      props: z.object({
        title: z.string().nullable(),
        description: z.string().nullable(),
        padding: z.enum(["sm", "md", "lg"]).nullable(),
      }),
      hasChildren: true,
      description: "A card container with optional title",
    },

    Grid: {
      props: z.object({
        columns: z.number().min(1).max(4).nullable(),
        gap: z.enum(["sm", "md", "lg"]).nullable(),
      }),
      hasChildren: true,
      description: "Grid layout with configurable columns",
    },

    Stack: {
      props: z.object({
        direction: z.enum(["horizontal", "vertical"]).nullable(),
        gap: z.enum(["sm", "md", "lg"]).nullable(),
        align: z.enum(["start", "center", "end", "stretch"]).nullable(),
      }),
      hasChildren: true,
      description: "Flex stack for horizontal or vertical layouts",
    },

    // Data Display Components
    Metric: {
      props: z.object({
        label: z.string(),
        valuePath: z.string(),
        format: z.enum(["number", "currency", "percent"]).nullable(),
        trend: z.enum(["up", "down", "neutral"]).nullable(),
        trendValue: z.string().nullable(),
      }),
      description: "Display a single metric with optional trend indicator",
    },

    Chart: {
      props: z.object({
        type: z.enum(["bar", "line", "pie", "area"]),
        dataPath: z.string(),
        title: z.string().nullable(),
        height: z.number().nullable(),
      }),
      description: "Display a simple chart from array data (legacy)",
    },

    Table: {
      props: z.object({
        dataPath: z.string(),
        columns: z.array(
          z.object({
            key: z.string(),
            label: z.string(),
            format: z.enum(["text", "currency", "date", "badge"]).nullable(),
          }),
        ),
      }),
      description: "Display tabular data",
    },

    List: {
      props: z.object({
        dataPath: z.string(),
        emptyMessage: z.string().nullable(),
      }),
      hasChildren: true,
      description: "Render a list from array data",
    },

    // Interactive Components
    Button: {
      props: z.object({
        label: z.string(),
        variant: z.enum(["primary", "secondary", "danger", "ghost"]).nullable(),
        size: z.enum(["sm", "md", "lg"]).nullable(),
        action: z.string(),
        disabled: z.boolean().nullable(),
      }),
      description: "Clickable button with action",
    },

    Select: {
      props: z.object({
        label: z.string().nullable(),
        bindPath: z.string(),
        options: z.array(
          z.object({
            value: z.string(),
            label: z.string(),
          }),
        ),
        placeholder: z.string().nullable(),
      }),
      description: "Dropdown select input",
    },

    DatePicker: {
      props: z.object({
        label: z.string().nullable(),
        bindPath: z.string(),
        placeholder: z.string().nullable(),
      }),
      description: "Date picker input",
    },

    TextField: {
      props: z.object({
        label: z.string(),
        valuePath: z.string(),
        placeholder: z.string().nullable(),
        type: z.enum(["text", "email", "password", "number"]).nullable(),
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
      description: "Text input field with validation",
    },

    // Typography
    Heading: {
      props: z.object({
        text: z.string(),
        level: z.enum(["h1", "h2", "h3", "h4"]).nullable(),
      }),
      description: "Section heading",
    },

    Text: {
      props: z.object({
        content: z.string(),
        variant: z.enum(["body", "caption", "label"]).nullable(),
        color: z
          .enum(["default", "muted", "success", "warning", "danger"])
          .nullable(),
      }),
      description: "Text paragraph",
    },

    // Status Components
    Badge: {
      props: z.object({
        text: z.string(),
        variant: z
          .enum(["default", "success", "warning", "danger", "info"])
          .nullable(),
      }),
      description: "Small status badge",
    },

    Alert: {
      props: z.object({
        type: z.enum(["info", "success", "warning", "error"]),
        title: z.string(),
        message: z.string().nullable(),
        dismissible: z.boolean().nullable(),
      }),
      description: "Alert/notification banner",
    },

    // Special Components
    Divider: {
      props: z.object({
        label: z.string().nullable(),
      }),
      description: "Visual divider",
    },

    Empty: {
      props: z.object({
        title: z.string(),
        description: z.string().nullable(),
        action: z.string().nullable(),
        actionLabel: z.string().nullable(),
      }),
      description: "Empty state placeholder",
    },

    // ============================================
    // NEW COMPONENTS
    // ============================================

    // Charts (Recharts-based)
    ...chartComponents,

    // Layout
    ...layoutComponents,

    // Data Display
    ...dataComponents,

    // Forms
    ...formComponents,

    // Content
    ...contentComponents,

    // Marketing
    ...marketingComponents,
  },
  actions: {
    export_report: { description: "Export the current dashboard to PDF" },
    refresh_data: { description: "Refresh all metrics and charts" },
    view_details: { description: "View detailed information" },
    apply_filter: { description: "Apply the current filter settings" },
    navigate: { description: "Navigate to a different page" },
    submit_form: { description: "Submit form data" },
    get_started: { description: "Navigate to getting started" },
    learn_more: { description: "Learn more about the product" },
    sign_up: { description: "Sign up for the service" },
    contact: { description: "Contact the team" },
  },
  validation: "strict",
});

// Export the component list for the AI prompt
export const componentList = dashboardCatalog.componentNames as string[];
