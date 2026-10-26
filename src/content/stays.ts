import type { PhotoKey } from "@/content/photos";

export type StayCategory = "rooms" | "suites" | "cabins";

export type Stay = {
  slug: string;
  name: string;
  category: StayCategory;
  photo: PhotoKey;
  label: string;
  description: string;
  tags: [string, string, ...string[]];
  body: string;
  details: string[];
  gallery: { photo: PhotoKey; caption: string }[];
  officialUrl: string;
};

export const stays: Stay[] = [
  {
    slug: "lodge-rooms",
    name: "Lodge rooms",
    category: "rooms",
    photo: "queen",
    label: "SINGLE QUEEN · KING · DOUBLE QUEEN",
    description: "Warm wood interiors and an easy place to settle in after a day outside.",
    tags: ["Queen or king options", "WiFi", "Continental breakfast"],
    body: "Find a comfortable room for a solo escape, a trip for two, or time away with family. Choose a single queen, single king, or double queen configuration. Room features vary, so review the individual listing when you reserve.",
    details: [
      "Queen rooms include a mini refrigerator and covered front porch.",
      "King rooms 31 and 32 offer a rear patio with mountain views.",
      "Ask the lodge about Room 31 and your specific accessibility needs.",
      "Lodge rooms are non-smoking and do not accept pets.",
    ],
    gallery: [
      { photo: "queen", caption: "Single queen room" },
      { photo: "double", caption: "A double queen room" },
    ],
    officialUrl: "https://rainbowvalleylodge.com/accommodations/single-rooms/",
  },
  {
    slug: "suites",
    name: "Suites & kitchens",
    category: "suites",
    photo: "suite",
    label: "A LITTLE EXTRA ROOM",
    description: "Slow breakfasts, more space, and select suites with a complete kitchen.",
    tags: ["Two queen beds", "Select full kitchens", "Patio options"],
    body: "Bring a little of home to your Montana stay. Suites give you room to unwind; kitchen suites add flexibility for early starts and relaxed meals. Select the room whose amenities fit your plans.",
    details: [
      "Rooms 29 and 34 feature two queen beds and a complete kitchen.",
      "Their kitchens include a refrigerator, stove, microwave and utensils.",
      "Room 24 is a corner mini-suite with a refrigerator, microwave and rear patio.",
      "Ask about connecting rooms if you are traveling together.",
    ],
    gallery: [
      { photo: "suite", caption: "Suite at Rainbow Valley Lodge" },
      { photo: "suiteKitchen", caption: "Room 29 kitchen" },
    ],
    officialUrl: "https://rainbowvalleylodge.com/accommodations/suites/",
  },
  {
    slug: "trapper-cabin",
    name: "Trapper Cabin",
    category: "cabins",
    photo: "trapper",
    label: "PRIVATE CABIN · UP TO 4 GUESTS",
    description: "Your own porch, meadow views, and space for your four-legged companion.",
    tags: ["1 king + sofa bed", "Full kitchen", "Pet friendly"],
    body: "Settle into a one-bedroom cabin in a hay meadow beneath the Tobacco Root Mountains. A covered porch makes a fine place for the first cup of coffee—or the last quiet moment of the day.",
    details: [
      "Six miles north of Ennis, off the main lodge property.",
      "Sleeps up to four with one king bed and a queen hide-a-bed.",
      "Complete kitchen, washer and dryer, air conditioning and WiFi.",
      "Covered porch with BBQ and a fenced area for pets.",
    ],
    gallery: [
      { photo: "trapper", caption: "Trapper Cabin exterior" },
      { photo: "trapperBedroom", caption: "Trapper Cabin bedroom" },
      { photo: "trapperKitchen", caption: "Trapper Cabin kitchen" },
      { photo: "trapperPorch", caption: "Trapper Cabin porch" },
    ],
    officialUrl: "https://rainbowvalleylodge.com/accommodations/cabins/trapper-cabin/",
  },
  {
    slug: "c-bar-3",
    name: "C Bar 3 Cabin",
    category: "cabins",
    photo: "cbarBedroom",
    label: "VINTAGE LOG CABIN · 2 GUESTS",
    description: "Classic log-cabin character tucked beneath the cottonwood trees.",
    tags: ["1 queen bed", "Full kitchen", "Patio & BBQ"],
    body: "Make yourself comfortable in a vintage Montana cabin with room for two. Prepare something simple in the kitchen, take your time on the patio, and make the next day your own.",
    details: [
      "Off-property cabin near Ennis and the Madison River.",
      "One queen bed; accommodates up to two guests.",
      "Complete kitchen, living room, WiFi and satellite television.",
      "Private outdoor patio with BBQ. Non-smoking; pets are not accepted.",
    ],
    gallery: [
      { photo: "cbar", caption: "C Bar 3 living room" },
      { photo: "cbarBedroom", caption: "C Bar 3 queen bedroom" },
      { photo: "cbarKitchen", caption: "C Bar 3 kitchen" },
    ],
    officialUrl: "https://rainbowvalleylodge.com/accommodations/cabins/c-bar-3-cabin/",
  },
];

export const stayFilters: { value: StayCategory | "all"; label: string }[] = [
  { value: "all", label: "All stays" },
  { value: "rooms", label: "Lodge rooms" },
  { value: "suites", label: "Suites & kitchens" },
  { value: "cabins", label: "Private cabins" },
];

export function getStay(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}
