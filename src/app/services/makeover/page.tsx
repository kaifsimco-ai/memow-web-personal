import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images at build time
function getMakeoverImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "public/Makeover");

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    return filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Makeover/${encodeURIComponent(name)}`);
  } catch {
    return [];
  }
}

export default function MakeoverPage() {
  const images = getMakeoverImages();

  return (
    <ServiceGallery
      title="Makeover Services"
      description="Look your absolute best on your special day. Our expert makeup artists and stylists ensure you shine bright."
      images={images}
      backLink="/"
    />
  );
}
