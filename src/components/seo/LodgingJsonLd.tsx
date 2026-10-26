import { site } from "@/config/site";
import { photos } from "@/content/photos";

/** schema.org LodgingBusiness, built only from details published on the site. */
export function LodgingJsonLd({ siteUrl }: { siteUrl: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    url: `${siteUrl}/`,
    image: `${siteUrl}${photos.lodge.full.src}`,
    telephone: "+1-406-682-4264",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    checkinTime: "15:00",
    checkoutTime: "11:00",
  };
  return (
    <script
      type="application/ld+json"
      // Escaping "<" keeps the JSON from closing the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
