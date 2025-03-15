"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { modelVersions } from "@/lib/data/midjourney-data";
import { Badge } from "@/components/ui/badge";
import { Cpu, Star, Sparkles, CheckCircle2, Layers } from "lucide-react";

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

export function ModelSelector({ selectedModel, onSelectModel }: ModelSelectorProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Cpu className="h-5 w-5 mr-2" />
          <div>
            <CardTitle className="text-gray-800">Model Version</CardTitle>
            <CardDescription>
              Select which Midjourney model to use for your prompt
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="mb-4 p-2 bg-gray-50 rounded-md min-h-10" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <Badge 
            variant="parameter"
            style={{
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}
          >
            <Layers className="h-4 w-4" />
            <span className="inline-block font-medium">
              {modelVersions.find((m) => m.value === selectedModel)?.label || selectedModel}
            </span>
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {modelVersions.map((model) => {
            const isSelected = selectedModel === model.value;
            let icon = <Cpu className="h-4 w-4" />;
            
            // Assign special icons to different versions
            if (model.value === "6.1") {
              icon = <Star className="h-4 w-4" />;
            } else if (model.value === "5.2") {
              icon = <Sparkles className="h-4 w-4" />;
            } else if (model.value === "niji") {
              icon = <CheckCircle2 className="h-4 w-4" />;
            }
            
            return (
              <div key={model.value} className="parameter-option" style={{ maxWidth: '100%', overflow: 'hidden', width: '100%' }}>
                <Button
                  variant={isSelected ? "secondary" : "outline"}
                  className={`w-full ${isSelected ? 'bg-blue-100 text-blue-800 border-blue-300' : 'border-gray-300'}`}
                  onClick={() => onSelectModel(model.value)}
                  style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}
                >
                  <span className="flex items-center truncate" style={{ maxWidth: 'calc(100% - 20px)' }}>
                    {icon}
                    <span className="ml-1 truncate">{model.label}</span>
                  </span>
                </Button>
                <div className="absolute invisible group-hover:visible z-10 bg-black text-white text-xs rounded px-2 py-1 right-0 -top-10 w-60">
                  {model.description}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 