import { Closing } from "@/components/sections/Closing";
import { PageIntro } from "@/components/sections/PageIntro";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { galleryPhotos } from "@/content/gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Photo journal",
  path: "/gallery/",
  description:
    "Explore authentic photography of Rainbow Valley Lodge, its accommodations, and the surrounding Montana landscapes.",
});

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        kicker="THE RAINBOW VALLEY PHOTO JOURNAL"
        title={["A glimpse of", "the good life."]}
        copy="Real places. Real rooms. A few of the things waiting for you in and around the valley."
      />
      <section className="container section compact">
        <PhotoGallery className="gallery-grid" items={galleryPhotos} />
        <p className="small-note">
          Photographs from the lodge’s original website. Room layouts and off-property cabin locations vary.
        </p>
      </section>
      <Closing />
    </>
  );
}
