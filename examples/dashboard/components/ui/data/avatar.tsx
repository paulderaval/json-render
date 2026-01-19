"use client";

import { type ComponentRenderProps } from "@json-render/react";

export function Avatar({ element }: ComponentRenderProps) {
  const { src, alt, name, size, fallbackColor } = element.props as {
    src?: string | null;
    alt?: string | null;
    name?: string | null;
    size?: "sm" | "md" | "lg" | "xl" | null;
    fallbackColor?: string | null;
  };

  const sizes: Record<string, number> = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  };

  const fontSizes: Record<string, number> = {
    sm: 12,
    md: 14,
    lg: 20,
    xl: 28,
  };

  const dimension = sizes[size || "md"];
  const fontSize = fontSizes[size || "md"];

  const getInitials = (n: string) => {
    const parts = n.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return "?";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    const first = parts[0];
    const last = parts[parts.length - 1];
    return (first.charAt(0) + (last?.charAt(0) ?? "")).toUpperCase();
  };

  const initials = name ? getInitials(name) : "?";

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name || "Avatar"}
        style={{
          width: dimension,
          height: dimension,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: "50%",
        background: fallbackColor || "var(--foreground)",
        color: "var(--background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 600,
      }}
    >
      {initials}
    </div>
  );
}
