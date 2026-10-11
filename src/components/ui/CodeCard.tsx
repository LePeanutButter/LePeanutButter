interface CodeCardProps {
  filename?: string;
}

function ActivityIcon({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`flex size-10 items-center justify-center border-l-2 ${
        active ? "border-white text-white" : "border-transparent text-[#8b949e]"
      }`}
    >
      {children}
    </span>
  );
}

function FileIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 3.5h9l5 5V20.5H5V3.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 3.5v5h5M8 13h8M8 16h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ActivityBar() {
  return (
    <aside
      aria-label="VS Code activity bar"
      className="flex w-14 shrink-0 flex-col items-center justify-between bg-[#252526] py-3"
    >
      <div className="flex flex-col items-center gap-2">
        <ActivityIcon active>
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <path d="M4 5.5h16v13H4zM8 5.5v13M8 9h12M8 13h12M8 17h12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
        <ActivityIcon>
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <path d="M4 5.5h7v5H4zM13 13.5h7v5h-7zM11 8h2v8h-2zM8 10.5v3h8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
        <ActivityIcon>
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m15 15 4.5 4.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
        <ActivityIcon>
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <path d="M6 5h12v14H6zM9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ActivityIcon>
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
        <ActivityIcon>
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5.5 20c.8-3.2 2.8-5 6.5-5s5.7 1.8 6.5 5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </ActivityIcon>
      </div>
    </aside>
  );
}

export default function CodeCard({ filename = "main.tf" }: CodeCardProps) {
  return (
    <div className="code-card overflow-hidden rounded-2xl border border-[#c9c9c9] bg-[#f3f3f3] text-[#1f1f1f] shadow-2xl transition-transform duration-500 ease-premium hover:-translate-y-1">
      <div className="flex h-12 items-center border-b border-[#d4d4d4] bg-[#e8e8e8] px-4">
        <div className="flex gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <p className="absolute left-1/2 -translate-x-1/2 font-sans text-xs font-medium text-[#555]">
          {filename} — portfolio
        </p>
      </div>

      <div className="flex min-h-[510px]">
        <ActivityBar />

        <aside className="hidden w-56 shrink-0 border-r border-[#d8d8d8] bg-[#f3f3f3] p-4 sm:block">
          <p className="mb-5 text-[10px] font-semibold tracking-wider text-[#555]">EXPLORER</p>
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#555]">
            <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 16 16">
              <path d="m4 6 4 4 4-4" stroke="currentColor" />
            </svg>
            PORTFOLIO
          </div>
          <div className="mt-4 space-y-4 pl-3 font-mono text-[11px] text-[#555]">
            <div>
              <p className="mb-2 flex items-center gap-1 font-sans font-semibold text-[#333]">
                <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 16 16">
                  <path d="m4 6 4 4 4-4" stroke="currentColor" />
                </svg>
                PROVIDERS
              </p>
              <p className="flex items-center gap-2 pl-3">
                <span className="text-[#5c2d91]">@</span>
                hashicorp/aws
              </p>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1 font-sans font-semibold text-[#333]">
                <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 16 16">
                  <path d="m4 6 4 4 4-4" stroke="currentColor" />
                </svg>
                MODULE CALLS
              </p>
              <p className="pl-3 text-[#777]">networking</p>
              <p className="mt-1 pl-3 text-[#777]">governance</p>
              <p className="mt-1 pl-3 text-[#777]">security_baseline</p>
            </div>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col bg-[#ffffff]">
          <div className="flex h-9 items-center border-b border-[#d8d8d8] bg-[#ececec]">
            <div className="flex h-full items-center gap-2 border-r border-[#d8d8d8] bg-white px-4 text-xs text-[#333]">
              <FileIcon />
              <span>{filename}</span>
              <span className="ml-3 text-[#777]">×</span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-x-auto py-4 font-mono text-[11px] leading-6 sm:text-xs">
            <pre className="min-w-[570px]">
              <code>
                {[
                  ["resource ", "technology_governance_profile", " ", "santiago_botero", " {"],
                  ['  name = ', '"Santiago Botero Garcia"'],
                  ['  role = ', '"IT Governance | Security | Architecture | Digital Transformation"'],
                  ['  current_focus = ', '"Information Security Governance and Technology Risk"'],
                  [""],
                  ["  professional_interests = ["],
                  ['    "IT Governance & Regulatory Compliance",'],
                  ['    "Security and Enterprise Architecture",'],
                  ['    "Cloud & Hybrid Infrastructure",'],
                  ['    "Technology Management & Digital Transformation"'],
                  ["  ]"],
                  [""],
                  ["  capabilities = ["],
                  ['    "Third-Party Risk & Vulnerability Governance",'],
                  ['    "Architecture, DevSecOps & Infrastructure as Code",'],
                  ['    "Data-Driven Process Automation",'],
                  ['    "Software and Cloud-Native Systems"'],
                  ["  ]"],
                  ["}"],
                ].map((line, index) => (
                  <span className="flex min-h-6" key={`${index}-${line.join("")}`}>
                    <span className="w-12 shrink-0 select-none pr-4 text-right text-[#999]">{index + 1}</span>
                    <span className="whitespace-pre">
                      {line.length === 5 ? (
                        <>
                          <span className="code-syntax-keyword">{line[0]}</span>
                          <span className="code-syntax-string">&quot;{line[1]}&quot;</span>
                          <span className="code-syntax-plain">{line[2]}</span>
                          <span className="code-syntax-string">&quot;{line[3]}&quot;</span>
                          <span className="code-syntax-plain">{line[4]}</span>
                        </>
                      ) : line[0]?.trim().endsWith("=") ? (
                        <>
                          <span className="code-syntax-property">{line[0].slice(0, line[0].indexOf("=") + 1)}</span>
                          <span className="code-syntax-string">{line[1]}</span>
                        </>
                      ) : (
                        <span className={line[0]?.includes('"') ? "code-syntax-string" : "code-syntax-plain"}>{line[0]}</span>
                      )}
                    </span>
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <div className="border-t border-[#d8d8d8] bg-[#1e1e1e] px-5 py-3 font-mono text-xs text-[#d4d4d4]">
            <div className="mb-2 flex items-center gap-3 text-[#bdbdbd]">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider">TERMINAL</span>
              <span className="text-[#777]">PROBLEMS</span>
              <span className="text-[#777]">OUTPUT</span>
            </div>
            <p>
              <span className="text-[#4ec9b0]">o</span> <span className="text-[#569cd6]">-&gt;</span>{" "}
              tf-test <span className="ml-1 inline-block h-4 w-1.5 animate-blink bg-[#aeafad] align-[-3px]" />
            </p>
          </div>
        </main>
      </div>

      <div className="flex min-h-6 items-center justify-between bg-[#007acc] px-3 font-mono text-[10px] text-white sm:px-4">
        <div className="flex gap-4">
          <span>Ln 14, Col 1</span>
          <span>Spaces: 2</span>
        </div>
        <div className="flex gap-4">
          <span className="hidden sm:inline">UTF-8</span>
          <span>Terraform</span>
          <span className="hidden sm:inline">Prettier</span>
        </div>
      </div>
    </div>
  );
}
