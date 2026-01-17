import fs from "fs";
import path from "path";
import ServiceGallery from "@/components/ServiceGallery";

// Get images and video at build time
function getPreWeddingMedia(): {
  images: string[];
  videoUrl: string | undefined;
} {
  const mediaDirectory = path.join(process.cwd(), "public/Pre-wedding");

  try {
    const filenames = fs.readdirSync(mediaDirectory);

    const images = filenames
      .filter((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name))
      .map((name) => `/Pre-wedding/${encodeURIComponent(name)}`);

    const video = filenames.find((name) => /\.(mp4|webm|mov)$/i.test(name));
    const videoUrl = video
      ? `/Pre-wedding/${encodeURIComponent(video)}`
      : undefined;

    return { images, videoUrl };
  } catch {
    return { images: [], videoUrl: undefined };
  }
}

export default function PreWeddingPage() {
  const { images, videoUrl } = getPreWeddingMedia();

  return (
    <ServiceGallery
      title="Pre-Wedding"
      description="Capture beautiful moments before the big day with stunning pre-wedding photoshoots and cinematic videos."
      images={images}
      videoUrl={videoUrl}
      backLink="/"
    />
  );
}
