import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images at build time
function getCateringImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "public/Catering");

  try {
    const filenames = fs.readdirSync(imagesDirectory);
    return filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Catering/${encodeURIComponent(name)}`);
  } catch {
    return [];
  }
}

export default function CateringPage() {
  const images = getCateringImages();

  return (
    <ServiceGallery
      title="Catering Services"
      description="Delight your guests with exquisite cuisine. From traditional Indian delicacies to international flavors, we cater to every palate."
      images={images}
      backLink="/"
    />
  );
}
