"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bot, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ChatbotSlideOver() {
  return (
    <Sheet>
      <SheetTrigger 
        render={<Button variant="default" className="w-full flex items-center gap-2" />}
      >
        <Bot className="w-5 h-5" />
        Tanya AI
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-card border-border flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-primary">
            <Bot className="w-6 h-6" />
            Tanya AI
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Asisten cerdas untuk analisa harga dan tren komoditas.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          <div className="bg-muted p-4 rounded-lg rounded-tl-none self-start max-w-[85%]">
            <p className="text-sm text-foreground">
              Halo! Saya asisten AI PANEN. Ada yang bisa saya bantu terkait harga komoditas hari ini?
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-border bg-background">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Tanya harga beras hari ini..."
              className="flex-1 bg-input border-border focus-visible:ring-primary"
            />
            <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
