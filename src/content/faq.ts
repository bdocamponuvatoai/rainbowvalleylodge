export type FaqItem = { question: string; answer: string };

/** Shared FAQ. Home shows the first four, Stay the last four, Plan all of them plus `planFaq`. */
export const faq: FaqItem[] = [
  {
    question: "When can I check in and check out?",
    answer:
      "Check-in begins after 3 pm. Please check out by 11 am. For arrival questions, call the lodge at (406) 682-4264.",
  },
  {
    question: "Can I bring my dog?",
    answer:
      "Pets are welcome in Trapper Cabin, Duplex Left, and Duplex Right. Lodge rooms and most other cabins do not accept pets. Confirm your pet arrangements with the lodge before reserving.",
  },
  {
    question: "When is the pool open?",
    answer: "The heated outdoor pool operates from Memorial Day through Labor Day.",
  },
  {
    question: "Are the cabins at the lodge?",
    answer:
      "Vacation cabins are off-property. Locations vary; Trapper Cabin is six miles north of Ennis. Review the location of your selected accommodation before booking.",
  },
  {
    question: "How do I reserve a stay?",
    answer:
      "Use the secure reservation link to check current rates and availability through the lodge’s Checkfront system. You can also call (406) 682-4264 for help choosing a stay.",
  },
];

export const planFaq: FaqItem[] = [
  {
    question: "What is the deposit and cancellation policy?",
    answer:
      "The lodge lists a 50% deposit at booking. Deposit refunds require 14 days’ cancellation notice for May 15–October 15 stays, or 48 hours’ notice for October 16–May 14 stays. Confirm the terms for your reservation in the booking system.",
  },
  {
    question: "Is breakfast included?",
    answer: "Continental breakfast is served at the lodge from 6 am to 9 am daily.",
  },
  {
    question: "Can you help arrange fishing?",
    answer:
      "Yes. Contact the lodge about guided fishing, fishing packages and O’Dell Spring Creek access. Availability and inclusions should be confirmed before you book.",
  },
];
