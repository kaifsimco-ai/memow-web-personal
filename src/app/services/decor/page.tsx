import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images at build time
function getDecorImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "public/Decor");

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    return filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Decor/${encodeURIComponent(name)}`);
  } catch {
    return [];
  }
}

export default function DecorPage() {
  const images = getDecorImages();

  return (
    <ServiceGallery
      title="Decor Services"
      description="Transform your venue with stunning decorations. From elegant floral arrangements to themed setups, we bring your vision to life."
      images={images}
      backLink="/"
    />
  );
}
