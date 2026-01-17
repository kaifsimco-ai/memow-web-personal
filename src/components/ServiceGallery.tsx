"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

interface ServiceGalleryProps {
  title: string;
  description: string;
  images: string[];
  videoUrl?: string;
  backLink?: string;
}

export default function ServiceGallery({
  title,
  description,
  images,
  videoUrl,
  backLink = "/",
}: ServiceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href={backLink}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/HaveitLogo.svg"
                height={24}
                width={24}
                alt="Haveit Logo"
              />
              <span className="text-xl font-semibold">Haveit</span>
            </Link>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-skin via-gold/20 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-black mb-4">
              {title}
            </h1>
            <p className="text-lg text-grayShade2 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-brown-80 text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        {videoUrl && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <video
              src={videoUrl}
              controls
              className="w-full rounded-2xl shadow-lg"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </section>
        )}

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}
