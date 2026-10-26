import Link from "next/link";

import { Brand } from "@/components/ui/Brand";
import { site } from "@/config/site";

const { address } = site;

export function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <Brand />
          <p>
            Good mornings. Great outdoors.
            <br />A little more Montana.
          </p>
          <a className="footer-phone" href={site.phone.href}>
            {site.phone.label}
          </a>
        </div>
        <div>
          <h3>Make yourself at home</h3>
          <Link href="/stay/">Rooms, suites &amp; cabins</Link>
          <Link href="/fishing/">Fly fishing</Link>
          <Link href="/explore/">Around the valley</Link>
          <Link href="/gallery/">Photo journal</Link>
        </div>
        <div>
          <h3>Make your way here</h3>
          <Link href="/about/">Meet the lodge</Link>
          <Link href="/plan/">Plan your visit &amp; FAQs</Link>
          <Link href="/contact/">Contact &amp; directions</Link>
          <a href={site.bookingUrl} target="_blank" rel="noopener">
            Secure reservations ↗
          </a>
        </div>
        <div>
          <h3>Find us in Ennis</h3>
          <p>
            {address.street}
            <br />
            {`${address.locality}, ${address.region} ${address.postalCode}`}
          </p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="footer-detail">Office · Daily, 6 am–11 pm</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Rainbow Valley Lodge</span>
        <a href={site.originalSiteUrl} target="_blank" rel="noopener">
          Original lodge website ↗
        </a>
        <Link href="/privacy/">Privacy</Link>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
