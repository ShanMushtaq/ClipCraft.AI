export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading font-bold mb-8">Settings</h1>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex border-b border-border">
          <button className="px-6 py-3 font-bold text-primary border-b-2 border-primary bg-background">Platform Defaults</button>
          <button className="px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">Export Preferences</button>
          <button className="px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">Account</button>
        </div>

        <div className="p-6">
          <h3 className="font-bold mb-4">Default Export Resolution</h3>
          <select className="bg-input border border-border rounded px-4 py-2 w-full max-w-xs outline-none">
            <option>1080p HD</option>
            <option>720p</option>
            <option>480p</option>
          </select>

          <h3 className="font-bold mt-8 mb-4">Primary Platform</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['TikTok', 'YouTube Shorts', 'Instagram Reels', 'Twitter / X'].map(platform => (
              <label key={platform} className="flex items-center gap-2 p-3 border border-border rounded cursor-pointer hover:border-primary">
                <input type="radio" name="platform" className="accent-primary" />
                <span className="text-sm">{platform}</span>
              </label>
            ))}
          </div>

          <button className="mt-8 bg-primary text-primary-foreground px-6 py-2 rounded font-bold">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
