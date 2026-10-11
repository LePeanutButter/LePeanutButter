"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Certificate } from "@/src/types";
import Image from "next/image";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClosingRef = useRef(false);
  const [isClosing, setIsClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(onClose, 180);
  }, [onClose]);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [requestClose]);

  return (
    <div
      className={`certificate-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 ${
        isClosing ? "certificate-modal-backdrop-closing" : ""
      }`}
      onClick={requestClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-dialog-title"
        className={`certificate-modal-dialog relative z-10 max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-surface shadow-2xl ${
          isClosing ? "certificate-modal-dialog-closing" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[85vh] overflow-y-auto p-8 sm:p-10">
          <button 
            ref={closeButtonRef}
            type="button"
            className="absolute right-6 top-6 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-canvas text-ink-secondary transition-colors hover:bg-black/5 hover:text-ink"
            onClick={requestClose}
            aria-label="Close certificate details"
          >
            &times;
          </button>
          
          <div className="mb-6 flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-ink">
            {certificate.logoUrl ? (
              <Image src={certificate.logoUrl} alt={`${certificate.issuer} logo`} className="h-6 w-6 rounded-sm object-contain" width={24} height={24} />
            ) : (
              <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-sm bg-canvas text-xs">
                {certificate.issuer.charAt(0)}
              </span>
            )}
            <span className="text-border-subtle font-sans font-light">|</span>
            <span className="font-semibold text-ink">{certificate.issuer}</span>
          </div>
          
          <h2 id="certificate-dialog-title" className="mb-2 text-2xl font-bold leading-tight text-ink sm:text-3xl">
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
                        <h4 className="font-medium text-ink group-hover:underline">{item.title}</h4>
                        <p className="line-clamp-2 text-sm text-ink-secondary">{item.description}</p>
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
      <style jsx>{`
        .certificate-modal-backdrop {
          background: rgb(0 0 0 / 50%);
          animation: certificate-modal-fade-in 180ms ease-out both;
        }

        .certificate-modal-dialog {
          animation: certificate-modal-scale-in 180ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .certificate-modal-backdrop-closing {
          animation: certificate-modal-fade-out 180ms ease-in both;
        }

        .certificate-modal-dialog-closing {
          animation: certificate-modal-scale-out 180ms ease-in both;
        }

        @keyframes certificate-modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes certificate-modal-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes certificate-modal-scale-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes certificate-modal-scale-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(8px) scale(0.98); }
        }

        @media (prefers-reduced-motion: reduce) {
          .certificate-modal-backdrop,
          .certificate-modal-dialog,
          .certificate-modal-backdrop-closing,
          .certificate-modal-dialog-closing {
            animation-duration: 1ms;
          }
        }
      `}</style>
    </div>
  );
}