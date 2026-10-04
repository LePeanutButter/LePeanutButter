export default function ProjectLoading() {
  return (
    <main className="mx-auto max-w-content animate-pulse px-6 pb-24 pt-28 sm:px-8">
      <div className="flex flex-col gap-6 border-b border-border-subtle pb-8 lg:flex-row lg:justify-between">
        <div className="h-12 w-44 rounded-control bg-border-subtle" />
        <div className="h-20 flex-1 rounded-card bg-border-subtle lg:max-w-md" />
      </div>
      <div className="mt-8 space-y-4">
        <div className="h-10 max-w-3xl rounded bg-border-subtle" />
        <div className="h-24 max-w-2xl rounded bg-border-subtle" />
      </div>
      <div className="mt-16 h-96 rounded-card bg-border-subtle/60" />
    </main>
  );
}
