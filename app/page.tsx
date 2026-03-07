export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Job Application AI Assistant
        </h1>
        <p className="mt-2 text-muted-foreground">
          Paste your CV and a job description to get a match analysis and a
          personalized cover letter.
        </p>
      </main>
    </div>
  );
}
