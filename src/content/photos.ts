import type { StaticImageData } from "next/image";

import cbar from "@/assets/images/cbar.webp";
import cbarSmall from "@/assets/images/cbar-small.webp";
import cbarBedroom from "@/assets/images/cbar-bedroom.webp";
import cbarKitchen from "@/assets/images/cbar-kitchen.webp";
import creek from "@/assets/images/creek.webp";
import creekSmall from "@/assets/images/creek-small.webp";
import double from "@/assets/images/double.webp";
import doubleSmall from "@/assets/images/double-small.webp";
import fishing from "@/assets/images/fishing.webp";
import fishingSmall from "@/assets/images/fishing-small.webp";
import flyShop from "@/assets/images/fly-shop.webp";
import hosts from "@/assets/images/hosts.webp";
import lodge from "@/assets/images/lodge.webp";
import lodgeSmall from "@/assets/images/lodge-small.webp";
import pool from "@/assets/images/pool.webp";
import poolSmall from "@/assets/images/pool-small.webp";
import quakeLake from "@/assets/images/quake-lake.webp";
import quakeLakeSmall from "@/assets/images/quake-lake-small.webp";
import queen from "@/assets/images/queen.webp";
import queenSmall from "@/assets/images/queen-small.webp";
import river from "@/assets/images/river.webp";
import suite from "@/assets/images/suite.webp";
import suiteSmall from "@/assets/images/suite-small.webp";
import suiteKitchen from "@/assets/images/suite-kitchen.webp";
import trapper from "@/assets/images/trapper.webp";
import trapperBedroom from "@/assets/images/trapper-bedroom.webp";
import trapperKitchen from "@/assets/images/trapper-kitchen.webp";
import trapperPorch from "@/assets/images/trapper-porch.webp";
import valley from "@/assets/images/valley.webp";
import virginiaCity from "@/assets/images/virginia-city.webp";
import virginiaCitySmall from "@/assets/images/virginia-city-small.webp";
import yellowstone from "@/assets/images/yellowstone.webp";
import yellowstoneSmall from "@/assets/images/yellowstone-small.webp";

/**
 * A photograph from the lodge's original website. `small` is a 720px-wide
 * variant, present only when the original is wider than that.
 */
export type Photo = { full: StaticImageData; small?: StaticImageData };

export const photos = {
  cbar: { full: cbar, small: cbarSmall },
  cbarBedroom: { full: cbarBedroom },
  cbarKitchen: { full: cbarKitchen },
  creek: { full: creek, small: creekSmall },
  double: { full: double, small: doubleSmall },
  fishing: { full: fishing, small: fishingSmall },
  flyShop: { full: flyShop },
  hosts: { full: hosts },
  lodge: { full: lodge, small: lodgeSmall },
  pool: { full: pool, small: poolSmall },
  quakeLake: { full: quakeLake, small: quakeLakeSmall },
  queen: { full: queen, small: queenSmall },
  river: { full: river },
  suite: { full: suite, small: suiteSmall },
  suiteKitchen: { full: suiteKitchen },
  trapper: { full: trapper },
  trapperBedroom: { full: trapperBedroom },
  trapperKitchen: { full: trapperKitchen },
  trapperPorch: { full: trapperPorch },
  valley: { full: valley },
  virginiaCity: { full: virginiaCity, small: virginiaCitySmall },
  yellowstone: { full: yellowstone, small: yellowstoneSmall },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
