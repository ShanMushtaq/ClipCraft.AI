export default function ClipsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold">My Clips</h1>
        <div className="flex gap-2">
          <input type="text" placeholder="Search clips..." className="bg-input border border-border rounded px-4 py-2 text-sm" />
          <button className="bg-accent px-4 py-2 rounded text-sm font-bold">Filter</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((clip) => (
          <div key={clip} className="bg-card border border-border rounded-lg overflow-hidden group">
            <div className="aspect-[9/16] bg-accent relative flex items-center justify-center">
              <span className="text-muted-foreground text-xs">Preview</span>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm mb-1 truncate">Viral Hook {clip}</h3>
              <p className="text-xs text-muted-foreground mb-3">Podcast Ep 12</p>
              <button className="w-full bg-background border border-border hover:border-primary py-1.5 rounded text-xs font-bold transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
