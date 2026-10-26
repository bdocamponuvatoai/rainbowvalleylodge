import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";
import { site } from "@/config/site";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <span className="brand-emblem">
        <Image src={logo} alt="" width={52} height={52} loading="eager" />
      </span>
      <span>
        Rainbow Valley<small>{site.tagline}</small>
      </span>
    </Link>
  );
}
