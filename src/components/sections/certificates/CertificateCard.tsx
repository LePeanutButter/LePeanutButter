import type { Certificate } from "@/src/types";
import Image from "next/image";
interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-[210px] w-full flex-col justify-between rounded-card border border-border-subtle bg-surface p-5 text-left shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-3.5">
          <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider uppercase text-ink">
            {certificate.logoUrl ? (
              // Keep real issuer marks when available; otherwise use a local text fallback.
              <Image src={certificate.logoUrl} alt={`${certificate.issuer} logo`} className="h-4 w-4 rounded-sm object-contain" width={16} height={16} />
            ) : (
              <span aria-hidden="true" className="flex h-4 w-4 items-center justify-center rounded-sm bg-canvas text-[10px]">
                {certificate.issuer.charAt(0)}
              </span>
            )}
            <span className="text-border-subtle font-sans text-xs font-light">|</span>
            <span className="text-ink">{certificate.issuer}</span>
          </span>
          <span className="font-mono text-xs text-ink-muted shrink-0">
            {certificate.issueDate}
          </span>
        </div>
        
        <h4 className="line-clamp-2 text-lg font-semibold leading-6 text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70">
          {certificate.title}
        </h4>
        
        {certificate.licenseNumber && (
          <p className="mt-2 font-mono text-xs text-ink-muted/80">
            ID: {certificate.licenseNumber}
          </p>
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-border-subtle/60 flex items-center justify-between text-xs font-semibold text-ink w-full">
        <span>View Details</span>
        <span aria-hidden="true" className="transform transition-transform duration-500 ease-premium group-hover:translate-x-1">&rarr;</span>
      </div>
    </button>
  );
}