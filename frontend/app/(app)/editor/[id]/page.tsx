export default function EditorPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-full bg-background overflow-hidden">
      {/* Left Panel: Clips */}
      <div className="w-80 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border">
          <h3 className="font-bold">Generated Clips</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((clip) => (
            <div key={clip} className="bg-background border border-border rounded-md p-3 hover:border-primary cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-sm">Clip #{clip}</span>
                <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded">95% Score</span>
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-2">0:32 &rarr; 1:15</div>
              <div className="flex gap-2">
                <span className="w-4 h-4 bg-accent rounded" title="TikTok"></span>
                <span className="w-4 h-4 bg-accent rounded" title="YouTube"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <button className="w-full py-2 bg-accent hover:bg-accent/80 text-foreground rounded-md text-sm font-bold transition-colors">
            Generate More
          </button>
        </div>
      </div>

      {/* Center Panel: Preview */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="aspect-[9/16] h-full max-h-[600px] bg-black border border-border rounded-md relative flex items-center justify-center">
            <span className="text-muted-foreground">Video Preview (9:16)</span>
          </div>
        </div>
        <div className="h-32 border-t border-border bg-card p-4 flex flex-col gap-2">
          <div className="flex justify-between text-xs font-mono text-muted-foreground">
            <span>0:00</span>
            <span>45:20</span>
          </div>
          <div className="h-8 bg-accent rounded-md relative">
             <div className="absolute left-[10%] w-[5%] h-full bg-primary/50 rounded-md border border-primary"></div>
             <div className="absolute left-[30%] w-[8%] h-full bg-primary/50 rounded-md border border-primary"></div>
          </div>
        </div>
      </div>

      {/* Right Panel: Properties */}
      <div className="w-72 border-l border-border bg-card p-4 flex flex-col gap-6">
        <div>
          <h4 className="text-sm font-bold text-muted-foreground mb-2">Clip Title</h4>
          <input type="text" defaultValue="Amazing Moment 1" className="w-full bg-input border border-border rounded px-3 py-2 text-sm focus:border-primary outline-none" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-muted-foreground mb-2">Aspect Ratio</h4>
          <select className="w-full bg-input border border-border rounded px-3 py-2 text-sm outline-none">
            <option>9:16 (Vertical)</option>
            <option>1:1 (Square)</option>
            <option>16:9 (Horizontal)</option>
          </select>
        </div>
        <div className="mt-auto">
          <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-md hover:scale-[0.98] transition-transform">
            Export Clip
          </button>
        </div>
      </div>
    </div>
  );
}
