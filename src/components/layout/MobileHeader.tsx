import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./Sidebar";

export function MobileHeader() {
  return (
    <header className="md:hidden flex items-center justify-between h-16 px-4 border-b border-border bg-sidebar">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-xl">P</span>
        </div>
        <span className="font-bold text-xl tracking-wide text-foreground">
          PANEN-AI
        </span>
      </div>

      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="text-foreground" />
          }
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 border-r-border bg-sidebar">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Sidebar className="flex border-none w-full" />
        </SheetContent>
      </Sheet>
    </header>
  );
}
