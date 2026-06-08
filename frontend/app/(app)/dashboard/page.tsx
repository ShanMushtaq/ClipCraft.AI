export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-heading font-bold mb-8">Dashboard</h1>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {['Videos Uploaded', 'Clips Generated', 'Hours Processed', 'Storage Used'].map((stat, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-lg hover:scale-[1.02] transition-transform">
            <p className="text-muted-foreground text-sm font-sans mb-2">{stat}</p>
            <p className="text-3xl font-bold font-mono">{[12, 145, "4.5", "12GB"][i]}</p>
          </div>
        ))}
      </div>

      {/* Recent Videos */}
      <h2 className="text-2xl font-heading font-bold mb-6">Recent Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((video) => (
          <div key={video} className="bg-card border border-border rounded-lg overflow-hidden hover:scale-[1.02] transition-transform group cursor-pointer">
            <div className="aspect-video bg-accent relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold">Open Editor</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Podcast Episode #{video}</h3>
              <p className="text-muted-foreground text-sm font-mono mb-4">45:20 • Aug 14</p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-accent px-2 py-1 rounded">12 Clips</span>
                <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">Completed</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
