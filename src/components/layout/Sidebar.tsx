import Link from "next/link";
import { LayoutDashboard, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatbotSlideOver } from "./ChatbotSlideOver";

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "hidden md:flex flex-col w-64 border-r border-border bg-sidebar px-4 py-6",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-xl">P</span>
        </div>
        <span className="font-bold text-xl tracking-wide text-foreground">
          PANEN-AI
        </span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-muted-foreground transition-colors"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          href="/alerts"
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-muted-foreground transition-colors"
        >
          <Bell className="w-5 h-5" />
          Price Alerts
        </Link>
      </nav>

      <div className="mt-auto pt-4">
        <ChatbotSlideOver />
      </div>
    </aside>
  );
}
