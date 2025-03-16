"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModelSelector } from "./model-selector";
import { AspectRatioSelector } from "./aspect-ratio-selector";
import { ParameterSelector } from "./parameter-selector";
import { NegativePromptSelector } from "./negative-prompt-selector";
import { PromptStarter } from "./prompt-starter";
import { SrefSelector } from "./sref-selector";
import { stylizedParameters } from "@/lib/data/midjourney-data";
import { Copy, Download, RefreshCw } from "lucide-react";
import { copyToClipboard, downloadAsText } from "@/lib/utils";

export function PromptBuilder() {
  const [mainPrompt, setMainPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("6.1");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string | null>(null);
  const [selectedNegativeOptions, setSelectedNegativeOptions] = useState<string[]>([]);
  const [customNegativePrompt, setCustomNegativePrompt] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const [selectedStarter, setSelectedStarter] = useState<string | null>(null);
  const [finalPrompt, setFinalPrompt] = useState("");
  const [srefEnabled, setSrefEnabled] = useState(false);
  
  // Initialize the selectedOptions state with empty arrays for each category
  useEffect(() => {
    const initialOptionsState: Record<string, string[]> = {};
    stylizedParameters.forEach((category) => {
      initialOptionsState[category.id] = [];
    });
    setSelectedOptions(initialOptionsState);
  }, []);

  const buildFinalPrompt = useCallback(() => {
    // Start with the selected starter or empty string
    const promptParts: string[] = [];
    
    if (selectedStarter) {
      promptParts.push(selectedStarter);
    }
    
    // Add the main prompt
    if (mainPrompt) {
      promptParts.push(mainPrompt);
    }
    
    // Add selected style options
    let styleOptions: string[] = [];
    Object.entries(selectedOptions).forEach(([, options]) => {
      styleOptions = [...styleOptions, ...options];
    });
    
    if (styleOptions.length > 0) {
      promptParts.push(styleOptions.join(", "));
    }
    
    // Combine parts for the positive prompt
    const positivePrompt = promptParts.filter(Boolean).join(" ");
    
    // Create the negative prompt string
    let negativePromptStr = "";
    if (selectedNegativeOptions.length > 0 || customNegativePrompt) {
      const negativeParts = [
        ...selectedNegativeOptions,
        customNegativePrompt,
      ].filter(Boolean);
      negativePromptStr = `--no ${negativeParts.join(", ")}`;
    }
    
    // Add aspect ratio if selected
    const aspectRatioStr = selectedAspectRatio || "";
    
    // Add model version parameter
    const modelVersionStr = selectedModel ? `--v ${selectedModel}` : "";
    
    // Add SREF if enabled
    const srefStr = srefEnabled ? `--sref random` : "";
    
    // Combine everything
    const allParts = [
      positivePrompt,
      negativePromptStr,
      aspectRatioStr,
      modelVersionStr,
      srefStr,
    ].filter(Boolean);
    
    setFinalPrompt(allParts.join(" "));
  }, [
    mainPrompt,
    selectedModel,
    selectedAspectRatio,
    selectedNegativeOptions,
    customNegativePrompt,
    selectedOptions,
    selectedStarter,
    srefEnabled,
  ]);

  // Build the final prompt whenever dependencies change
  useEffect(() => {
    buildFinalPrompt();
  }, [buildFinalPrompt]);

  const handleSelectOption = (categoryId: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), option],
    }));
  };

  const handleRemoveOption = (categoryId: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] || []).filter((o) => o !== option),
    }));
  };

  const handleAddNegativeOption = (option: string) => {
    if (!selectedNegativeOptions.includes(option)) {
      setSelectedNegativeOptions([...selectedNegativeOptions, option]);
    }
  };

  const handleRemoveNegativeOption = (option: string) => {
    setSelectedNegativeOptions(selectedNegativeOptions.filter((o) => o !== option));
  };

  const handleToggleSref = () => {
    setSrefEnabled(!srefEnabled);
  };

  const handleCopyPrompt = () => {
    copyToClipboard(finalPrompt);
    // Show toast or feedback here
  };

  const handleDownloadPrompt = () => {
    downloadAsText(finalPrompt, "midjourney-prompt.txt");
  };

  const handleResetPrompt = () => {
    setMainPrompt("");
    setSelectedAspectRatio(null);
    setSelectedNegativeOptions([]);
    setCustomNegativePrompt("");
    setSrefEnabled(false);
    
    const resetOptions: Record<string, string[]> = {};
    stylizedParameters.forEach((category) => {
      resetOptions[category.id] = [];
    });
    setSelectedOptions(resetOptions);
    
    setSelectedStarter(null);
  };

  // Split parameters into left and right columns for more balanced layout
  const leftColumnParams = stylizedParameters.filter((_, index) => index % 2 === 0);
  const rightColumnParams = stylizedParameters.filter((_, index) => index % 2 === 1);

  return (
    <div className="prompt-builder-container">
      {/* Main Prompt at the top (full width) */}
      <Card className="shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Main Prompt</h2>
        <textarea
          className="w-full h-40 p-4 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe what you want to see in your image..."
          value={mainPrompt}
          onChange={(e) => setMainPrompt(e.target.value)}
        />
      </Card>

      {/* Model and SREF selectors at the top */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/2">
          <ModelSelector 
            selectedModel={selectedModel} 
            onSelectModel={setSelectedModel} 
          />
        </div>
        <div className="w-full md:w-1/2">
          <SrefSelector
            srefEnabled={srefEnabled}
            onToggleSref={handleToggleSref}
          />
        </div>
      </div>

      {/* Main Grid with two columns on desktop */}
      <div className="prompt-builder-grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-6">
          {/* Left Column */}
          <PromptStarter
            selectedStarter={selectedStarter}
            onSelectStarter={setSelectedStarter}
            onClearStarter={() => setSelectedStarter(null)}
          />

          <AspectRatioSelector
            selectedAspectRatio={selectedAspectRatio}
            onSelectAspectRatio={setSelectedAspectRatio}
            onClearAspectRatio={() => setSelectedAspectRatio(null)}
          />

          {/* Left column parameters */}
          {leftColumnParams.map((category) => (
            <ParameterSelector
              key={category.id}
              category={category}
              selectedOptions={selectedOptions[category.id] || []}
              onSelectOption={(option) => handleSelectOption(category.id, option)}
              onRemoveOption={(option) => handleRemoveOption(category.id, option)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <NegativePromptSelector
            selectedNegativeOptions={selectedNegativeOptions}
            onAddNegativeOption={handleAddNegativeOption}
            onRemoveNegativeOption={handleRemoveNegativeOption}
            customNegativePrompt={customNegativePrompt}
            onCustomNegativePromptChange={setCustomNegativePrompt}
          />

          {/* Right column parameters */}
          {rightColumnParams.map((category) => (
            <ParameterSelector
              key={category.id}
              category={category}
              selectedOptions={selectedOptions[category.id] || []}
              onSelectOption={(option) => handleSelectOption(category.id, option)}
              onRemoveOption={(option) => handleRemoveOption(category.id, option)}
            />
          ))}
        </div>
      </div>

      {/* Final Prompt at the bottom */}
      <Card className="shadow-md p-6 mt-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Final Prompt</h2>
          <div className="relative">
            <textarea
              className="w-full h-40 p-4 rounded border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={finalPrompt}
              readOnly
            />
            <div className="absolute right-2 bottom-2 flex gap-2 footer-buttons">
              <Button 
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white" 
                onClick={handleCopyPrompt}>
                <Copy className="h-4 w-4 mr-1" /> Copy
              </Button>
              <Button 
                className="flex items-center bg-green-500 hover:bg-green-600 text-white" 
                onClick={handleDownloadPrompt}>
                <Download className="h-4 w-4 mr-1" /> Save
              </Button>
              <Button 
                className="flex items-center bg-red-500 hover:bg-red-600 text-white" 
                onClick={handleResetPrompt}>
                <RefreshCw className="h-4 w-4 mr-1" /> Reset
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 