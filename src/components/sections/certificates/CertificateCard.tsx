import type { Certificate } from "@/src/types";
import Image from 'next/image';

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex min-h-[210px] w-full flex-col justify-between text-left rounded-card border border-border-subtle bg-surface p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] focus:outline-none"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-3.5">
          <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider uppercase text-ink">
            <Image
              src={ certificate.logoUrl || `https://placehold.co/40x40/e5e7eb/6b7280?text=${encodeURIComponent(certificate.issuer.charAt(0))}`}
              alt={`${certificate.issuer} logo`}
              className="w-4 h-4 rounded-sm object-contain"
              width={16}
              height={16}
            />
            <span className="text-border-subtle font-sans text-xs font-light">|</span>
            <span className="text-ink">{certificate.issuer}</span>
          </span>
          <span className="font-mono text-[11px] text-ink-muted shrink-0">
            {certificate.issueDate}
          </span>
        </div>
        
        <h4 className="text-lg font-semibold leading-6 text-ink transition-opacity duration-500 ease-premium group-hover:opacity-70 line-clamp-2">
          {certificate.title}
        </h4>
        
        {certificate.licenseNumber && (
          <p className="mt-2 font-mono text-[11px] text-ink-muted/80">
            ID: {certificate.licenseNumber}
          </p>
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-border-subtle/60 flex items-center justify-between text-xs font-semibold text-ink w-full">
        <span>View Details</span>
        <span className="transform transition-transform duration-500 ease-premium group-hover:translate-x-1">&rarr;</span>
      </div>
    </button>
  );
}