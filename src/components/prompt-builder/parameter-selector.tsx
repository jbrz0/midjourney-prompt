"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ParameterCategory, ParameterOption } from "@/lib/data/midjourney-data";
import { 
  Info, 
  Check, 
  X, 
  Star, 
  Sparkles, 
  Image, 
  PenTool, 
  Palette, 
  Camera, 
  Clock, 
  Zap, 
  Sun, 
  Moon, 
  Cloud, 
  Lightbulb, 
  FileImage, 
  Award, 
  Compass, 
  Aperture,
  ScreenShare,
  Maximize,
  Paintbrush,
  Layers,
  Droplet,
  Box,
  Calendar,
  CaseSensitive,
  Coins,
  Film
} from "lucide-react";

interface ParameterSelectorProps {
  category: ParameterCategory;
  selectedOptions: string[];
  onSelectOption: (option: string) => void;
  onRemoveOption: (option: string) => void;
}

// Function to get appropriate icon based on category id
const getCategoryIcon = (categoryId: string) => {
  switch(categoryId) {
    case 'rendering-quality':
      return <Award className="h-5 w-5" />;
    case 'photography':
      return <Camera className="h-5 w-5" />;
    case 'lighting-mood':
      return <Lightbulb className="h-5 w-5" />;
    case 'artistic-styles':
      return <Paintbrush className="h-5 w-5" />;
    case 'color-palette':
      return <Palette className="h-5 w-5" />;
    case 'materials-textures':
      return <Layers className="h-5 w-5" />;
    case 'time-periods':
      return <Clock className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
};

// Function to get option-specific icon
const getOptionIcon = (option: ParameterOption, categoryId: string) => {
  const value = option.value.toLowerCase();
  const label = option.label.toLowerCase();
  
  // Rendering & Quality icons
  if (categoryId === 'rendering-quality') {
    if (value.includes('ray') || value.includes('traced')) return <Zap className="h-4 w-4" />;
    if (value.includes('detail')) return <Maximize className="h-4 w-4" />;
    if (value.includes('photo')) return <Camera className="h-4 w-4" />;
    if (value.includes('8k') || value.includes('4k') || value.includes('resolution')) return <ScreenShare className="h-4 w-4" />;
    if (value.includes('hdr')) return <FileImage className="h-4 w-4" />;
    if (value.includes('cinematic') || value.includes('lighting')) return <Lightbulb className="h-4 w-4" />;
    if (value.includes('unreal') || value.includes('engine')) return <Box className="h-4 w-4" />;
    if (value.includes('octane') || value.includes('render') || value.includes('vray')) return <Layers className="h-4 w-4" />;
    if (value.includes('cinema') || value.includes('blender')) return <Film className="h-4 w-4" />;
    if (value.includes('award')) return <Award className="h-4 w-4" />;
    return <Award className="h-4 w-4" />;
  }
  
  // Photography icons
  else if (categoryId === 'photography') {
    if (value.includes('35mm') || value.includes('photography')) return <Camera className="h-4 w-4" />;
    if (value.includes('aperture') || value.includes('f1.8')) return <Aperture className="h-4 w-4" />;
    if (value.includes('macro')) return <Maximize className="h-4 w-4" />;
    if (value.includes('bokeh')) return <Droplet className="h-4 w-4" />;
    if (value.includes('golden') || value.includes('hour')) return <Sun className="h-4 w-4" />;
    if (value.includes('drone') || value.includes('shot')) return <Compass className="h-4 w-4" />;
    if (value.includes('lens') || value.includes('fish') || value.includes('telephoto') || value.includes('tilt')) return <FileImage className="h-4 w-4" />;
    if (value.includes('polaroid') || value.includes('lomography')) return <Image className="h-4 w-4" />;
    if (value.includes('black') || value.includes('white') || value.includes('monochrome')) return <CaseSensitive className="h-4 w-4" />;
    if (value.includes('night')) return <Moon className="h-4 w-4" />;
    if (value.includes('long') || value.includes('exposure')) return <Clock className="h-4 w-4" />;
    return <Camera className="h-4 w-4" />;
  }
  
  // Lighting & Mood icons
  else if (categoryId === 'lighting-mood') {
    if (value.includes('dramatic') || value.includes('mood')) return <Sparkles className="h-4 w-4" />;
    if (value.includes('volumetric') || value.includes('light')) return <Sun className="h-4 w-4" />;
    if (value.includes('neon')) return <Zap className="h-4 w-4" />;
    if (value.includes('dark') || value.includes('moody')) return <Moon className="h-4 w-4" />;
    if (value.includes('dreamy') || value.includes('atmosphere') || value.includes('ethereal')) return <Cloud className="h-4 w-4" />;
    if (value.includes('foggy')) return <Cloud className="h-4 w-4" />;
    if (value.includes('rim') || value.includes('backlit') || value.includes('silhouette')) return <Lightbulb className="h-4 w-4" />;
    if (value.includes('warm')) return <Sun className="h-4 w-4" />;
    if (value.includes('cool')) return <Moon className="h-4 w-4" />;
    if (value.includes('melancholic')) return <Cloud className="h-4 w-4" />;
    if (value.includes('ominous')) return <Cloud className="h-4 w-4" />;
    if (value.includes('nostalgic')) return <Clock className="h-4 w-4" />;
    if (value.includes('cozy')) return <Sun className="h-4 w-4" />;
    if (value.includes('mysterious')) return <Moon className="h-4 w-4" />;
    if (value.includes('glowing')) return <Sparkles className="h-4 w-4" />;
    return <Lightbulb className="h-4 w-4" />;
  }
  
  // Artistic Styles icons
  else if (categoryId === 'artistic-styles') {
    if (value.includes('digital') || value.includes('trending')) return <PenTool className="h-4 w-4" />;
    if (value.includes('anime')) return <Image className="h-4 w-4" />;
    if (value.includes('pixel')) return <Box className="h-4 w-4" />;
    if (value.includes('low poly')) return <Layers className="h-4 w-4" />;
    if (value.includes('watercolor') || value.includes('painting') || value.includes('oil')) return <Paintbrush className="h-4 w-4" />;
    if (value.includes('impression') || value.includes('expression') || value.includes('surrealism')) return <Palette className="h-4 w-4" />;
    if (value.includes('cubism') || value.includes('minimalism')) return <Box className="h-4 w-4" />;
    if (value.includes('concept') || value.includes('steam') || value.includes('cyber') || value.includes('vapor')) return <Compass className="h-4 w-4" />;
    if (value.includes('art deco') || value.includes('art nouveau') || value.includes('bauhaus')) return <Layers className="h-4 w-4" />;
    if (value.includes('ukiyo') || value.includes('gothic') || value.includes('pointillism')) return <PenTool className="h-4 w-4" />;
    if (value.includes('graffiti')) return <Paintbrush className="h-4 w-4" />;
    return <Paintbrush className="h-4 w-4" />;
  }
  
  // Color Palette icons
  else if (categoryId === 'color-palette') {
    if (value.includes('vibrant') || value.includes('neon')) return <Palette className="h-4 w-4" />;
    if (value.includes('pastel')) return <Droplet className="h-4 w-4" />;
    if (value.includes('monochromatic') || value.includes('sepia')) return <CaseSensitive className="h-4 w-4" />;
    if (value.includes('technicolor')) return <Film className="h-4 w-4" />;
    if (value.includes('muted') || value.includes('earthy')) return <Paintbrush className="h-4 w-4" />;
    if (value.includes('duotone') || value.includes('complementary') || value.includes('analogous') || value.includes('triadic')) return <Palette className="h-4 w-4" />;
    if (value.includes('cool')) return <Moon className="h-4 w-4" />;
    if (value.includes('warm')) return <Sun className="h-4 w-4" />;
    if (value.includes('jewel')) return <Sparkles className="h-4 w-4" />;
    if (value.includes('iridescent') || value.includes('metallic')) return <Sparkles className="h-4 w-4" />;
    return <Palette className="h-4 w-4" />;
  }
  
  // Materials & Textures icons
  else if (categoryId === 'materials-textures') {
    if (value.includes('glass')) return <Droplet className="h-4 w-4" />;
    if (value.includes('marble') || value.includes('stone') || value.includes('concrete')) return <Box className="h-4 w-4" />;
    if (value.includes('wood')) return <Layers className="h-4 w-4" />;
    if (value.includes('metal') || value.includes('gold') || value.includes('silver')) return <Coins className="h-4 w-4" />;
    if (value.includes('fabric') || value.includes('leather')) return <Layers className="h-4 w-4" />;
    if (value.includes('ceramic')) return <Box className="h-4 w-4" />;
    if (value.includes('paper')) return <FileImage className="h-4 w-4" />;
    if (value.includes('crystal')) return <Sparkles className="h-4 w-4" />;
    if (value.includes('liquid')) return <Droplet className="h-4 w-4" />;
    return <Layers className="h-4 w-4" />;
  }
  
  // Time Periods & Eras icons
  else if (categoryId === 'time-periods') {
    if (value.includes('prehistoric') || value.includes('ancient')) return <Calendar className="h-4 w-4" />;
    if (value.includes('medieval') || value.includes('renaissance') || value.includes('victorian')) return <Clock className="h-4 w-4" />;
    if (value.includes('1920s') || value.includes('1950s') || value.includes('1980s')) return <Clock className="h-4 w-4" />;
    if (value.includes('futuristic') || value.includes('post') || value.includes('dystopian') || value.includes('utopian')) return <Compass className="h-4 w-4" />;
    return <Clock className="h-4 w-4" />;
  }
  
  // Default icon if no specific match
  return <Star className="h-4 w-4" />;
};

export function ParameterSelector({
  category,
  selectedOptions,
  onSelectOption,
  onRemoveOption,
}: ParameterSelectorProps) {
  const categoryIcon = getCategoryIcon(category.id);
  
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {categoryIcon}
            <div className="ml-2">
              <CardTitle className="text-gray-800">{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="mb-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <div className={`selected-options-container flex flex-wrap gap-2 mb-4 p-2 bg-gray-50 rounded-md min-h-10 ${category.id}`} style={{ maxWidth: '100%', overflow: 'hidden' }}>
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => {
                const optionObj = category.options.find((o) => o.value === option);
                const icon = optionObj ? getOptionIcon(optionObj, category.id) : <Star className="h-4 w-4" />;
                return (
                  <Badge key={option} variant="style" className={category.id} onRemove={() => onRemoveOption(option)}>
                    {icon}
                    {optionObj?.label || option}
                  </Badge>
                );
              })
            ) : (
              <p className="text-sm text-gray-500 italic">No options selected</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          {category.options.map((option) => (
            <OptionButton
              key={option.value}
              option={option}
              isSelected={selectedOptions.includes(option.value)}
              onSelect={() => onSelectOption(option.value)}
              onRemove={() => onRemoveOption(option.value)}
              categoryId={category.id}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface OptionButtonProps {
  option: ParameterOption;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  categoryId: string;
}

function OptionButton({ option, isSelected, onSelect, onRemove, categoryId }: OptionButtonProps) {
  const optionIcon = getOptionIcon(option, categoryId);
  
  return (
    <div className="relative group parameter-option" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Button
        variant={isSelected ? "secondary" : "outline"}
        className={`w-full justify-between ${isSelected ? 'bg-blue-100 text-blue-800 border-blue-300 parameter-option-selected' : 'border-gray-300'}`}
        onClick={isSelected ? onRemove : onSelect}
        style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <span className="flex items-center truncate" style={{ maxWidth: 'calc(100% - 20px)' }}>
          {optionIcon}
          <span className="ml-1 truncate">{option.label}</span>
        </span>
        {isSelected && <Check className="h-3 w-3 ml-1 flex-shrink-0" />}
      </Button>
      <div className="absolute invisible group-hover:visible z-10 bg-black text-white text-xs rounded px-2 py-1 right-0 -top-10 w-48">
        {option.description}
      </div>
    </div>
  );
} 