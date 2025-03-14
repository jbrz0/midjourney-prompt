"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aspectRatios } from "@/lib/data/midjourney-data";
import { Maximize, Square, Smartphone, Layout, Monitor } from "lucide-react";

interface AspectRatioSelectorProps {
  selectedAspectRatio: string | null;
  onSelectAspectRatio: (aspectRatio: string) => void;
  onClearAspectRatio: () => void;
}

// Function to get icon for aspect ratio
const getAspectRatioIcon = (aspectRatio: string) => {
  if (aspectRatio.includes('square') || aspectRatio.includes('1:1')) {
    return <Square className="h-4 w-4" />;
  } else if (aspectRatio.includes('landscape') || aspectRatio.includes('16:9')) {
    return <Monitor className="h-4 w-4" />;
  } else if (aspectRatio.includes('portrait') || aspectRatio.includes('9:16')) {
    return <Smartphone className="h-4 w-4" />;
  } else if (aspectRatio.includes('mobile')) {
    return <Smartphone className="h-4 w-4" />;
  }
  return <Layout className="h-4 w-4" />;
};

export function AspectRatioSelector({
  selectedAspectRatio,
  onSelectAspectRatio,
  onClearAspectRatio,
}: AspectRatioSelectorProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Maximize className="h-5 w-5 mr-2" />
          <div>
            <CardTitle className="text-gray-800">Aspect Ratio</CardTitle>
            <CardDescription>Choose the dimensions for your image</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="mb-4 p-2 bg-gray-50 rounded-md min-h-10" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {selectedAspectRatio ? (
            <Badge variant="aspect" onRemove={onClearAspectRatio} style={{ backgroundColor: '#d1fae5', color: '#065f46' }}>
              {aspectRatios.find((ar) => ar.value === selectedAspectRatio)?.label || selectedAspectRatio}
            </Badge>
          ) : (
            <p className="text-sm text-gray-500 italic">No aspect ratio selected</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {aspectRatios.map((aspectRatio) => {
            const isSelected = selectedAspectRatio === aspectRatio.value;
            const icon = getAspectRatioIcon(aspectRatio.value);
            
            return (
              <div key={aspectRatio.value} className="relative group parameter-option" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                <Button
                  variant={isSelected ? "secondary" : "outline"}
                  className={`w-full flex items-center justify-between ${isSelected ? 'bg-green-100 text-green-800 border-green-300' : 'border-gray-300'}`}
                  onClick={() => onSelectAspectRatio(aspectRatio.value)}
                  style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  <span className="flex items-center truncate" style={{ maxWidth: 'calc(100% - 20px)' }}>
                    {icon}
                    <span className="ml-1 truncate">{aspectRatio.label}</span>
                  </span>
                </Button>
                <div className="absolute invisible group-hover:visible z-10 bg-black text-white text-xs rounded px-2 py-1 right-0 -top-10 w-48">
                  {aspectRatio.description}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 