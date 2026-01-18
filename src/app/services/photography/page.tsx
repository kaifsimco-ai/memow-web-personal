import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images and video at build time
function getPhotographyMedia(): {
  images: string[];
  videoUrl: string | undefined;
} {
  const mediaDirectory = path.join(process.cwd(), "public/Photography");

  try {
    const filenames = fs.readdirSync(mediaDirectory);

    const images = filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Photography/${encodeURIComponent(name)}`);

    const video = filenames.find((name) => /\.(mp4|webm|mov)$/i.test(name));
    const videoUrl = video
      ? `/Photography/${encodeURIComponent(video)}`
      : undefined;

    return { images, videoUrl };
  } catch {
    return { images: [], videoUrl: undefined };
  }
}

export default function PhotographyPage() {
  const { images, videoUrl } = getPhotographyMedia();

  return (
    <ServiceGallery
      title="Photography & Videography"
      description="Capture every precious moment of your special day with our professional photographers and stunning cinematic videography."
      images={images}
      videoUrl={videoUrl}
      backLink="/"
    />
  );
}
