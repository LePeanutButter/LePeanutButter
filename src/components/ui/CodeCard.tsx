interface CodeCardProps {
  filename: string;
}

export default function CodeCard({ filename }: CodeCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-premium transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-premium-hover">
      <div className="flex items-center justify-between border-b border-border-subtle bg-black/[0.02] px-6 py-4">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <p className="font-mono text-xs text-ink-muted">{filename}</p>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-ink-secondary sm:p-10">
        <code>
          <span className="text-syntax-comment">
            {"// Defines the core of my professional approach"}
          </span>
          {"\n"}
          <span className="font-semibold text-syntax-keyword">const</span>{" "}
          <span className="text-syntax-property">developer</span> = {"{"}
          {"\n"}
          {"  "}name:{" "}
          <span className="text-syntax-string">&quot;Santiago Botero Garcia&quot;</span>,
          {"\n"}
          {"  "}role:{" "}
          <span className="text-syntax-string">
            &quot;Engineering Modern Digital Systems | Software Architecture | Full-Stack & Cloud Development&quot;
          </span>
          ,{"\n"}
          {"  "}philosophy: [
          <span className="text-syntax-string">&quot;Minimalism&quot;</span>,{" "}
          <span className="text-syntax-string">&quot;Reliable Systems&quot;</span>,{" "}
          <span className="text-syntax-string">&quot;User-Centered Code&quot;</span>],
          {"\n"}
          {"  "}stack: [
          <span className="text-syntax-string">&quot;Spring Boot&quot;</span>,{" "}
          <span className="text-syntax-string">&quot;React&quot;</span>,{" "}
          <span className="text-syntax-string">&quot;Cloud&quot;</span>,{" "}
          <span className="text-syntax-string">&quot;AI Automation&quot;</span>],
          {"\n"}
          {"  "}metrics: {"{"} craft:{" "}
          <span className="text-syntax-number">100</span>, curiosity:{" "}
          <span className="text-syntax-number">Infinity</span> {"}"}
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className="font-semibold text-syntax-keyword">export</span>{" "}
          <span className="font-semibold text-syntax-keyword">default</span>{" "}
          <span className="text-syntax-property">developer</span>;
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-ink align-middle" />
        </code>
      </pre>
    </div>
  );
}
