import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images at build time
function getVenueImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "public/Venue");

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    return filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Venue/${encodeURIComponent(name)}`);
  } catch {
    return [];
  }
}

export default function VenuePage() {
  const images = getVenueImages();

  return (
    <ServiceGallery
      title="Venue Services"
      description="Find the perfect venue for your celebration. From intimate gatherings to grand celebrations, we have the ideal space."
      images={images}
      backLink="/"
    />
  );
}
