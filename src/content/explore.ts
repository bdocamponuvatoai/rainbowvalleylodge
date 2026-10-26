import { photos, type Photo } from "@/content/photos";

type Destination = {
  id: string;
  photo: Photo;
  kicker: string;
  title: string;
  copy: string;
  url: string;
};

export const destinations: Destination[] = [
  {
    id: "yellowstone",
    photo: photos.yellowstone,
    kicker: "WILD LANDSCAPES",
    title: "Yellowstone National Park",
    copy: "Make a day for geysers, waterfalls and remarkable landscapes. The park’s West Entrance is a scenic drive from Ennis. Check current road access and park conditions before setting out.",
    url: "https://www.nps.gov/yell/planyourvisit/index.htm",
  },
  {
    id: "virginia-city",
    photo: photos.virginiaCity,
    kicker: "WESTERN HISTORY",
    title: "Virginia City",
    copy: "Walk through Montana’s gold-rush past, browse historic storefronts, and make time for lunch. Seasonal attractions and performances offer plenty of reasons to linger.",
    url: "https://rainbowvalleylodge.com/adventures/virginia-city-lodging/",
  },
  {
    id: "madison-valley",
    photo: photos.valley,
    kicker: "NEARER TO HOME",
    title: "Ennis & the Madison Valley",
    copy: "Keep the day close to home with downtown shops and galleries, a scenic drive, or a stop beside the river. Ask your hosts for a few local favorites.",
    url: "https://rainbowvalleylodge.com/adventures/",
  },
];

/** Home page teaser cards linking to the destinations above. */
export const adventures: { id: string; photo: Photo; alt: string; kicker: string; title: string }[] = [
  {
    id: "yellowstone",
    photo: photos.yellowstone,
    alt: "Upper Falls of the Yellowstone River",
    kicker: "A DAY OF DISCOVERY",
    title: "Yellowstone National Park",
  },
  {
    id: "virginia-city",
    photo: photos.virginiaCity,
    alt: "Historic storefronts in Virginia City",
    kicker: "A STEP BACK IN TIME",
    title: "Virginia City",
  },
  {
    id: "madison-valley",
    photo: photos.valley,
    alt: "Ranch landscape in the Madison Valley",
    kicker: "TAKE THE LONG WAY",
    title: "The Madison Valley",
  },
];

export type TripStyle = "unwind" | "fish" | "family";

export const tripStyles: { value: TripStyle; label: string }[] = [
  { value: "unwind", label: "Slow & scenic" },
  { value: "fish", label: "Here to fish" },
  { value: "family", label: "Family adventure" },
];

export const itineraries: Record<TripStyle, { title: string; body: string }[]> = {
  unwind: [
    {
      title: "Settle into the valley",
      body: "Arrive, unpack, and make an unhurried evening of it. Ask your hosts for a favorite place to eat in Ennis.",
    },
    {
      title: "Follow the scenic route",
      body: "Spend the morning around town, then take a drive through the Madison Valley. Leave time for a roadside view.",
    },
    {
      title: "A little history, a little lingering",
      body: "Head toward Virginia City for a look at Montana’s past. Check seasonal opening times before you go.",
    },
  ],
  fish: [
    {
      title: "Get your bearings",
      body: "Stop by O’Dell Creek Fly Shop for local conditions and advice. Confirm your license, access and guide arrangements.",
    },
    {
      title: "A day on the Madison",
      body: "Arrange a guided trip with River Borne Outfitters. Bring your questions, your camera, and time to enjoy the water.",
    },
    {
      title: "One more stretch of water",
      body: "Ask the lodge about O’Dell Spring Creek or another day on the river. Book any required access separately.",
    },
  ],
  family: [
    {
      title: "Make yourselves at home",
      body: "Settle into a room, suite or cabin. Explore Ennis together and decide what everyone wants to see.",
    },
    {
      title: "A Yellowstone day",
      body: "Plan an early start for Yellowstone. Check current park roads and conditions, then choose a few stops at a comfortable pace.",
    },
    {
      title: "Stories from the Old West",
      body: "Explore Virginia City and its history. Verify seasonal attractions, and leave time for a relaxed return to the lodge.",
    },
  ],
};
