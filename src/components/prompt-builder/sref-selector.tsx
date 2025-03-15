"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Fingerprint, Info } from "lucide-react";

interface SrefSelectorProps {
  srefEnabled: boolean;
  onToggleSref: () => void;
}

export function SrefSelector({ srefEnabled, onToggleSref }: SrefSelectorProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Fingerprint className="h-5 w-5 mr-2 text-blue-600" />
          <div>
            <CardTitle className="text-gray-800">Seed Reference (SREF)</CardTitle>
            <CardDescription>
              Add a random seed reference to maintain style consistency
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="sref-section">
          <div className="sref-info">
            <div className="sref-title">
              <Info className="h-4 w-4" />
              <span>What is SREF?</span>
            </div>
            <p className="sref-description">
              SREF (Seed Reference) allows you to generate images with consistent style. 
              When enabled, a random number will be added to your prompt that can be 
              referenced in future generations.
            </p>
          </div>
          <div className="toggle-container">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={srefEnabled}
                onChange={onToggleSref}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">{srefEnabled ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 