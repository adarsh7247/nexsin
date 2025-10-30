"use client";

import React, { createContext, useContext, useId } from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export type ChartItemConfig = {
  label?: React.ReactNode;
  icon?: React.ComponentType;
  color?: string;
  theme?: Record<Theme, string>;
};

export type ChartConfig = Record<string, ChartItemConfig>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

export const useChart = () => {
  const ctx = useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within a ChartContainer");
  return ctx;
};

// ✅ Container
export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const uniqueId = useId();
  const chartId = id || `chart-${uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center items-center text-xs",
          className
        )}
        {...props}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// ✅ Tooltip
export const ChartTooltip = RechartsTooltip;

export function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { color: string; value: string; name: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border bg-white p-2 text-xs shadow-md">
      <div className="font-semibold mb-1">{label}</div>
      {payload.map((entry, i) => (
        <div key={i} className="flex justify-between">
          <span>{entry.name}</span>
          <span className="font-mono">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

// ✅ Legend
export const ChartLegend = RechartsLegend;

export function ChartLegendContent({
  payload,
}: {
  payload?: { color: string; value: string; name: string }[];
}) {
  if (!payload?.length) return null;
  return (
    <div className="flex justify-center gap-4 pt-2 text-sm">
      {payload.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
