import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-sans text-sm flex flex-col gap-8 text-center">
        <h1 className="text-6xl font-heading font-bold tracking-tight text-foreground">
          Turn hours of footage into <span className="text-primary">viral-ready shorts.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-sans">
          AI detects the best moments, frames them perfectly, and exports for any platform.
        </p>
        <div className="flex gap-4 mt-8">
          <Link 
            href="/dashboard" 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-bold hover:scale-95 transition-transform"
          >
            Start for Free
          </Link>
          <Link 
            href="#" 
            className="px-8 py-4 bg-transparent border border-border text-foreground rounded-md font-bold hover:bg-accent transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
