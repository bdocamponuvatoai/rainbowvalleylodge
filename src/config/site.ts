// Business details and navigation. Safe to import from client components.

export const site = {
  name: "Rainbow Valley Lodge",
  tagline: "LODGE · ENNIS, MONTANA",
  themeColor: "#203c32",
  phone: { label: "(406) 682-4264", href: "tel:+14066824264" },
  tollFree: { label: "(800) 452-8254", href: "tel:+18004528254" },
  email: "rnbwvlly@3rivers.net",
  officeHours: "6 am–11 pm daily",
  address: {
    street: "4781 US Highway 287 N",
    locality: "Ennis",
    region: "Montana",
    regionCode: "MT",
    postalCode: "59729",
  },
  mailingAddress: "PO Box 26, Ennis, MT 59729",
  bookingUrl: "https://rainbowvalleylodge.checkfront.com/reserve/",
  originalSiteUrl: "https://rainbowvalleylodge.com/",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rainbow+Valley+Lodge+4781+US+Highway+287+Ennis+Montana",
  privacyPolicyUrl: "https://rainbowvalleylodge.com/privacy-policy",
} as const;

type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Stay", href: "/stay/" },
  { label: "Fly fishing", href: "/fishing/" },
  { label: "Explore Montana", href: "/explore/" },
  { label: "Our story", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
];
