import Link from "next/link";
import { Home, Upload, Video, List, Settings, HelpCircle, Activity } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-heading font-bold text-foreground">Clip<span className="text-primary">Craft</span></h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <Home size={18} /> Dashboard
          </Link>
          <Link href="/upload" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <Upload size={18} /> Upload New Video
          </Link>
          <Link href="/clips" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <Video size={18} /> My Clips
          </Link>
          <Link href="/history" className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <div className="flex items-center gap-3">
              <Activity size={18} /> Processing Queue
            </div>
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">3</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <Settings size={18} /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
            <HelpCircle size={18} /> Help
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
