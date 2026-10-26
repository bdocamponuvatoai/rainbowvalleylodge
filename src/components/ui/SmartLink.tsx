import Link from "next/link";
import type { ComponentProps } from "react";

type SmartLinkProps = ComponentProps<"a"> & { href: string };

/** Internal paths ("/…") use next/link; tel:, mailto:, hash and external links stay plain anchors. */
export function SmartLink({ href, ...rest }: SmartLinkProps) {
  if (href.startsWith("/")) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
