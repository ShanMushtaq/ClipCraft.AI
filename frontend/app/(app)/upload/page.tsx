export default function UploadPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading font-bold mb-8">Upload Video</h1>
      
      {/* Wizard Steps */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 h-2 bg-primary rounded-full" />
        <div className="flex-1 h-2 bg-accent rounded-full" />
        <div className="flex-1 h-2 bg-accent rounded-full" />
      </div>

      <div className="bg-card border border-border p-12 rounded-lg text-center flex flex-col items-center justify-center min-h-[400px] border-dashed">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Drop video here or click to browse</h3>
        <p className="text-muted-foreground mb-6">MP4, MOV, AVI, MKV up to 10GB</p>
        
        <div className="flex items-center gap-4 w-full max-w-md">
          <hr className="flex-1 border-border" />
          <span className="text-muted-foreground text-sm">OR</span>
          <hr className="flex-1 border-border" />
        </div>

        <div className="mt-6 w-full max-w-md flex gap-2">
          <input type="text" placeholder="Paste YouTube or Google Drive URL" className="flex-1 bg-input border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:border-primary" />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold">Import</button>
        </div>
      </div>
    </div>
  );
}
