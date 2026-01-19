"use client";

import { type ComponentRenderProps } from "@json-render/react";
import { useData } from "@json-render/react";
import { getByPath } from "@json-render/core";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "var(--foreground)",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

export function AreaChart({ element }: ComponentRenderProps) {
  const { dataPath, title, height, xKey, series, stacked } = element.props as {
    dataPath: string;
    title?: string | null;
    height?: number | null;
    xKey?: string | null;
    series?: Array<{ key: string; name?: string; color?: string }> | null;
    stacked?: boolean | null;
  };

  const { data } = useData();
  const chartData = getByPath(data, dataPath) as
    | Array<Record<string, unknown>>
    | undefined;

  if (!chartData || !Array.isArray(chartData) || chartData.length === 0) {
    return <div style={{ padding: 20, color: "var(--muted)" }}>No data</div>;
  }

  const xAxisKey = xKey || "label";
  const seriesConfig = series || [{ key: "value", name: "Value" }];

  return (
    <div>
      {title && (
        <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 600 }}>
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height={height || 300}>
        <RechartsAreaChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey={xAxisKey}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            stroke="var(--border)"
          />
          <YAxis
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            stroke="var(--border)"
          />
          <Tooltip
            contentStyle={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
            }}
          />
          {seriesConfig.length > 1 && <Legend />}
          {seriesConfig.map((s, i) => (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name || s.key}
              stroke={s.color || COLORS[i % COLORS.length]}
              fill={s.color || COLORS[i % COLORS.length]}
              fillOpacity={0.3}
              stackId={stacked ? "stack" : undefined}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
