"use client";

import { type ComponentRenderProps } from "@json-render/react";
import * as RadixTabs from "@radix-ui/react-tabs";

export function Tabs({ element, children }: ComponentRenderProps) {
  const { defaultTab, tabs } = element.props as {
    defaultTab?: string | null;
    tabs: Array<{ id: string; label: string }>;
  };

  const childArray = Array.isArray(children)
    ? children
    : children
      ? [children]
      : [];

  return (
    <RadixTabs.Root defaultValue={defaultTab || tabs[0]?.id}>
      <RadixTabs.List
        style={{
          display: "flex",
          borderBottom: "1px solid var(--border)",
          marginBottom: 16,
        }}
      >
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            key={tab.id}
            value={tab.id}
            style={{
              padding: "8px 16px",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid transparent",
              color: "var(--muted)",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            data-state-active-style={{
              color: "var(--foreground)",
              borderBottomColor: "var(--foreground)",
            }}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {tabs.map((tab, index) => (
        <RadixTabs.Content key={tab.id} value={tab.id}>
          {childArray[index]}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}

export function TabPanel({ children }: ComponentRenderProps) {
  return <div>{children}</div>;
}
