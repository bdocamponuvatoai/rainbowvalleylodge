import { SmartLink } from "@/components/ui/SmartLink";

type ArrowLinkProps = {
  href: string;
  label: string;
  /** "text-link" (default), "button", "button light", … */
  className?: string;
  /** Opens in a new tab. */
  external?: boolean;
};

/** A text link or button followed by the ↗ arrow. */
export function ArrowLink({ href, label, className = "text-link", external = false }: ArrowLinkProps) {
  return (
    <SmartLink className={className} href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {`${label} `}
      <span aria-hidden="true">↗</span>
    </SmartLink>
  );
}
