"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { promptStarters } from "@/lib/data/midjourney-data";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Camera, Brush, Paintbrush, Pencil, Image, PenTool, SmilePlus } from "lucide-react";

interface PromptStarterProps {
  selectedStarter: string | null;
  onSelectStarter: (starter: string) => void;
  onClearStarter: () => void;
}

// Function to get icon based on starter type
const getStarterIcon = (starterValue: string) => {
  if (starterValue.includes('photo')) {
    return <Camera className="h-4 w-4" />;
  } else if (starterValue.includes('illustration')) {
    return <PenTool className="h-4 w-4" />;
  } else if (starterValue.includes('painting')) {
    return <Paintbrush className="h-4 w-4" />;
  } else if (starterValue.includes('anime')) {
    return <SmilePlus className="h-4 w-4" />;
  } else if (starterValue.includes('3D')) {
    return <Brush className="h-4 w-4" />;
  } else if (starterValue.includes('art')) {
    return <Pencil className="h-4 w-4" />;
  }
  return <Image className="h-4 w-4" />;
};

export function PromptStarter({
  selectedStarter,
  onSelectStarter,
  onClearStarter,
}: PromptStarterProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Lightbulb className="h-5 w-5 mr-2" />
          <div>
            <CardTitle className="text-gray-800">Prompt Starter</CardTitle>
            <CardDescription>
              Choose how to start your prompt to set the overall style
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="mb-4 p-2 bg-gray-50 rounded-md min-h-10" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {selectedStarter ? (
            <Badge 
              variant="parameter" 
              onRemove={onClearStarter} 
              style={{ 
                backgroundColor: '#dbeafe', 
                color: '#1e40af',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              {getStarterIcon(selectedStarter)}
              <span className="inline-block font-medium">
                {promptStarters.find((ps) => ps.value === selectedStarter)?.label || selectedStarter}
              </span>
            </Badge>
          ) : (
            <p className="text-sm text-gray-500 italic">
              No prompt starter selected
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {promptStarters.map((starter) => {
            const isSelected = selectedStarter === starter.value;
            const icon = getStarterIcon(starter.value);
            
            return (
              <div key={starter.value} className="parameter-option" style={{ maxWidth: '100%', overflow: 'hidden', width: '100%' }}>
                <Button
                  variant={isSelected ? "secondary" : "outline"}
                  className={`w-full flex items-center justify-between ${isSelected ? 'bg-blue-100 text-blue-800 border-blue-300' : 'border-gray-300'}`}
                  onClick={() => onSelectStarter(starter.value)}
                  style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}
                >
                  <span className="flex items-center truncate" style={{ maxWidth: 'calc(100% - 20px)' }}>
                    {icon}
                    <span className="ml-1 truncate">{starter.label}</span>
                  </span>
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 