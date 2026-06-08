export default function HistoryPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-heading font-bold mb-8">Processing Queue & History</h1>
      
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-warning animate-pulse"></span>
          In Progress (3)
        </h2>
        
        <div className="space-y-4 mb-8">
          {[1, 2, 3].map((job) => (
            <div key={job} className="bg-background border border-border p-4 rounded-md flex items-center justify-between">
              <div>
                <p className="font-bold text-sm mb-1">Generating Clips - Podcast Part {job}</p>
                <div className="w-64 h-2 bg-accent rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${job * 25}%` }}></div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{job * 25}%</span>
            </div>
          ))}
        </div>

        <h2 className="font-bold mb-4 text-muted-foreground">Recent History</h2>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((job) => (
            <div key={job} className="p-3 border-b border-border flex justify-between text-sm">
              <span className="text-muted-foreground">Video ID #982{job} processed</span>
              <span className="text-success font-bold text-xs bg-success/10 px-2 py-0.5 rounded">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
