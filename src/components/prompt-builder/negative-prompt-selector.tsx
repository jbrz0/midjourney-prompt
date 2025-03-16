"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { negativePromptOptions } from "@/lib/data/midjourney-data";
import { Ban, Plus, X, AlertTriangle, Scissors, Eye, EyeOff, Atom, Fingerprint, Type, FileX, Signature, BadgeAlert, Skull, Focus, FileWarning, Brush, BadgeX, Moon, Sun, Copy } from "lucide-react";

interface NegativePromptSelectorProps {
  selectedNegativeOptions: string[];
  onAddNegativeOption: (option: string) => void;
  onRemoveNegativeOption: (option: string) => void;
  customNegativePrompt: string;
  onCustomNegativePromptChange: (value: string) => void;
}

// Function to get appropriate icon for negative option
const getNegativeOptionIcon = (option: string) => {
  const value = option.toLowerCase();
  
  if (value.includes('anatomy') || value.includes('proportion') || value.includes('finger') || value.includes('arm') || value.includes('limb') || value.includes('leg')) {
    return <Fingerprint className="h-4 w-4" />;
  } else if (value.includes('blur') || value.includes('focus')) {
    return <Focus className="h-4 w-4" />;
  } else if (value.includes('crop') || value.includes('cut') || value.includes('frame')) {
    return <Scissors className="h-4 w-4" />;
  } else if (value.includes('deform') || value.includes('disfigure') || value.includes('distort')) {
    return <Atom className="h-4 w-4" />;
  } else if (value.includes('duplicate')) {
    return <Copy className="h-4 w-4" />;
  } else if (value.includes('error') || value.includes('artifact')) {
    return <AlertTriangle className="h-4 w-4" />;
  } else if (value.includes('text')) {
    return <Type className="h-4 w-4" />;
  } else if (value.includes('watermark')) {
    return <FileX className="h-4 w-4" />;
  } else if (value.includes('signature')) {
    return <Signature className="h-4 w-4" />;
  } else if (value.includes('quality') || value.includes('pixel') || value.includes('jpeg') || value.includes('grain') || value.includes('noise')) {
    return <BadgeAlert className="h-4 w-4" />;
  } else if (value.includes('ugly') || value.includes('muta') || value.includes('amateur')) {
    return <Skull className="h-4 w-4" />;
  } else if (value.includes('face') || value.includes('hand')) {
    return <Eye className="h-4 w-4" />;
  } else if (value.includes('unclear') || value.includes('artificial')) {
    return <EyeOff className="h-4 w-4" />;
  } else if (value.includes('shadow') || value.includes('dark')) {
    return <Moon className="h-4 w-4" />;
  } else if (value.includes('light') || value.includes('exposed')) {
    return <Sun className="h-4 w-4" />;
  } else if (value.includes('color')) {
    return <Brush className="h-4 w-4" />;
  } else if (value.includes('flat') || value.includes('composition')) {
    return <BadgeX className="h-4 w-4" />;
  } else if (value.includes('double')) {
    return <FileWarning className="h-4 w-4" />;
  }
  
  // Default icon
  return <Ban className="h-4 w-4" />;
};

export function NegativePromptSelector({
  selectedNegativeOptions,
  onAddNegativeOption,
  onRemoveNegativeOption,
}: NegativePromptSelectorProps) {
  const [customInput, setCustomInput] = useState("");

  const handleAddCustom = () => {
    if (customInput.trim()) {
      onAddNegativeOption(customInput.trim());
      setCustomInput("");
    }
  };

  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Ban className="h-5 w-5 mr-2 text-red-500" />
          <div>
            <CardTitle className="text-gray-800">Negative Prompt</CardTitle>
            <CardDescription>
              Specify what you don&apos;t want to see in your image
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="mb-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <div className="selected-options-container flex flex-wrap gap-2 mb-4 p-2 bg-gray-50 rounded-md min-h-10" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            {selectedNegativeOptions.length > 0 ? (
              selectedNegativeOptions.map((option) => (
                <Badge
                  key={option}
                  variant="negative"
                  onRemove={() => onRemoveNegativeOption(option)}
                  style={{ 
                    backgroundColor: '#fee2e2', 
                    color: '#b91c1c',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  {getNegativeOptionIcon(option)}
                  <span className="inline-block font-medium">{option}</span>
                </Badge>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">
                No negative options selected
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4" style={{ maxWidth: '100%', overflow: 'hidden', marginBottom: '1.5rem', marginTop: '0.65rem' }}>
          <div className="flex-1 relative" style={{ maxWidth: 'calc(100% - 80px)' }}>
            <input
              type="text"
              className="neg-term-input flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              placeholder="Add negative terms"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddCustom();
                }
              }}
              style={{ maxWidth: '100%' }}
            />
            {customInput && (
              <X 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" 
                onClick={() => setCustomInput("")}
              />
            )}
          </div>
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white flex items-center" 
            onClick={handleAddCustom}
            style={{ flexShrink: 0 }}
          >
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {negativePromptOptions.map((option) => {
            const isSelected = selectedNegativeOptions.includes(option);
            const optionIcon = getNegativeOptionIcon(option);
            
            return (
              <div key={option} className="parameter-option" style={{ maxWidth: '100%', overflow: 'hidden', width: '100%' }}>
                <Button
                  variant={isSelected ? "secondary" : "outline"}
                  className={`text-xs flex items-center justify-between parameter-option ${isSelected ? 'bg-red-100 text-red-800 border-red-300' : 'border-gray-300'}`}
                  onClick={() =>
                    isSelected
                      ? onRemoveNegativeOption(option)
                      : onAddNegativeOption(option)
                  }
                  style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}
                >
                  <span className="flex items-center truncate" style={{ maxWidth: 'calc(100% - 20px)' }}>
                    {optionIcon}
                    <span className="ml-1 truncate">{option}</span>
                  </span>
                  {isSelected && <X className="h-3 w-3 ml-1 flex-shrink-0" />}
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 