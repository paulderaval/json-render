import { z } from "zod";

const seriesSchema = z.array(
  z.object({
    key: z.string(),
    name: z.string().nullable(),
    color: z.string().nullable(),
  }),
);

export const chartComponents = {
  LineChart: {
    props: z.object({
      dataPath: z.string(),
      title: z.string().nullable(),
      height: z.number().nullable(),
      xKey: z.string().nullable(),
      series: seriesSchema.nullable(),
    }),
    description: "Line chart for time series with multiple series support",
  },

  AreaChart: {
    props: z.object({
      dataPath: z.string(),
      title: z.string().nullable(),
      height: z.number().nullable(),
      xKey: z.string().nullable(),
      series: seriesSchema.nullable(),
      stacked: z.boolean().nullable(),
    }),
    description: "Filled area chart with optional stacking",
  },

  PieChart: {
    props: z.object({
      dataPath: z.string(),
      title: z.string().nullable(),
      height: z.number().nullable(),
      donut: z.boolean().nullable(),
      showLabels: z.boolean().nullable(),
      nameKey: z.string().nullable(),
      valueKey: z.string().nullable(),
    }),
    description: "Pie chart for proportions with donut variant",
  },

  BarChart: {
    props: z.object({
      dataPath: z.string(),
      title: z.string().nullable(),
      height: z.number().nullable(),
      xKey: z.string().nullable(),
      series: seriesSchema.nullable(),
      horizontal: z.boolean().nullable(),
      stacked: z.boolean().nullable(),
      grouped: z.boolean().nullable(),
    }),
    description: "Bar chart with horizontal, stacked, and grouped options",
  },
};
