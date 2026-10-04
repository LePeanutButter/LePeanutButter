import { useEffect, useState } from "react";
import type { Certificate } from "@/src/types";
import Image from 'next/image';

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure the browser paints the initial state before applying the open classes
    const raf = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 150); // 150ms extremely snappy
  };

  const backdropBase = "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-150 ease-out";
  const backdropState = isMounted && !isClosing ? "opacity-100" : "opacity-0";

  const dialogBase = "relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-surface shadow-2xl transition-all duration-150 ease-out transform";
  const dialogState = isMounted && !isClosing ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
      {/* Backdrop */}
      <div 
        className={`${backdropBase} ${backdropState}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal Dialog */}
      <div className={`${dialogBase} ${dialogState}`}>
        <div className="max-h-[85vh] overflow-y-auto p-8 sm:p-10">
          <button 
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-ink-secondary hover:bg-black/5 hover:text-ink transition-colors"
            onClick={handleClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          
          <div className="mb-6 flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-ink">
            <Image
              src={ certificate.logoUrl || `https://placehold.co/40x40/e5e7eb/6b7280?text=${encodeURIComponent(certificate.issuer.charAt(0))}`}
              alt={`${certificate.issuer} logo`}
              className="w-6 h-6 rounded-sm object-contain"
              width={24}
              height={24}
            />
            <span className="text-border-subtle font-sans font-light">|</span>
            <span className="font-semibold text-ink">{certificate.issuer}</span>
          </div>
          
          <h2 className="mb-2 text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {certificate.title}
          </h2>
          
          <div className="mb-8 font-mono text-sm text-ink-muted">
            <p>Issued Valid: {certificate.issueDate}</p>
            {certificate.licenseNumber && <p>Credential ID: {certificate.licenseNumber}</p>}
          </div>
          
          <div className="mt-8 border-t border-border-subtle pt-8">
            <h3 className="mb-6 text-lg font-semibold text-ink">Media & Verification</h3>
            
            {certificate.media && certificate.media.length > 0 ? (
              <div className="flex flex-col gap-4">
                {certificate.media.map((item, index) => (
                  <a 
                    key={index}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-border-subtle bg-canvas p-4 sm:p-6 transition-colors hover:border-black/15"
                  >
                    <div className="flex items-center gap-4">
                      {item.type === "image" && (
                        <div className="hidden sm:flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded bg-surface border border-border-subtle">
                          <Image src={item.url} alt={item.title} className="h-full w-full object-cover" fill/>
                        </div>
                      )}
                      
                      {item.type !== "image" && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface shadow-sm border border-border-subtle">
                          {item.type === "pdf" ? (
                            <svg className="h-6 w-6 text-ink-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg className="h-6 w-6 text-ink-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          )}
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-ink group-hover:underline line-clamp-1">{item.title}</h4>
                        <p className="text-sm text-ink-secondary line-clamp-2">{item.description}</p>
                      </div>
                      <div className="ml-auto pl-2 text-ink-muted group-hover:text-ink transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-ink-secondary">No media verification available for this certificate.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}