"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface TextBoxProps {
  initialText: string;
  label: string;
}

export function TextBox({ initialText, label }: TextBoxProps) {
  const [text, setText] = useState(initialText);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "The text has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "There was an error copying the text to your clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label
          htmlFor="copyable-textarea"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        <Button variant="outline" size="sm" onClick={copyToClipboard}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>
      <Textarea
        id="copyable-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[200px] text-sm"
      />
    </div>
  );
}
