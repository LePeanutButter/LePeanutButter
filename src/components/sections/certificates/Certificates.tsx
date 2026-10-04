"use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { certificates } from "@/src/data/portfolio";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import type { Certificate } from "@/src/types";

const INITIAL_CERTIFICATE_LIMIT = 6;

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

const parseDate = (dateStr: string) => {
  const [month, year] = dateStr.split(" ");
  return new Date(Number.parseInt(year, 10), monthMap[month] ?? 0, 1).getTime();
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(certificates.map(c => c.category)));
    return ["all", ...uniqueCategories];
  }, []);

  const filteredAndSortedCertificates = useMemo(() => {
    let filtered = certificates;
    if (activeCategory !== "all") {
      filtered = certificates.filter((c) => c.category === activeCategory);
    }

    return [...filtered].sort((a, b) => {
      const dateA = parseDate(a.issueDate);
      const dateB = parseDate(b.issueDate);
      if (dateA !== dateB) {
        return dateB - dateA; // Descending date
      }
      return a.title.localeCompare(b.title); // Ascending alphabetical
    });
  }, [activeCategory]);

  const hasMoreCertificates = filteredAndSortedCertificates.length > INITIAL_CERTIFICATE_LIMIT;
  const visibleCertificates = isExpanded
    ? filteredAndSortedCertificates
    : filteredAndSortedCertificates.slice(0, INITIAL_CERTIFICATE_LIMIT);
  const hiddenCount = filteredAndSortedCertificates.length - INITIAL_CERTIFICATE_LIMIT;

  // Reset expansion when category changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeCategory]);

  return (
    <section id="certificates" className="mx-auto max-w-content px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Continuous Learning" title="Certifications" />

        <div
          aria-label="Certificate category tabs"
          className="flex w-fit max-w-full overflow-x-auto rounded-control border border-border-subtle bg-surface p-1 shadow-premium no-scrollbar"
        >
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={
                activeCategory === tab
                  ? "whitespace-nowrap rounded-[6px] bg-ink px-4 py-2 text-sm font-medium capitalize text-canvas"
                  : "whitespace-nowrap px-4 py-2 text-sm font-medium capitalize text-ink-secondary hover:text-ink transition-colors"
              }
              aria-pressed={activeCategory === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {visibleCertificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {hasMoreCertificates && (
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full border border-border-subtle bg-transparent px-6 py-3 text-sm font-semibold text-ink-secondary transition-all duration-500 ease-premium hover:border-black/30 hover:bg-black/[0.01] hover:text-ink"
            onClick={() => setIsExpanded((prev) => !prev)}
            type="button"
          >
            <span>
              {isExpanded
                ? "Show fewer certificates"
                : `Show ${hiddenCount} more certificates`}
            </span>
            <span aria-hidden="true">{isExpanded ? "^" : "v"}</span>
          </button>
        </div>
      )}

      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}