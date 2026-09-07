import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-inner">
        <span className="footer-mark">VG / portfolio</span>
        <p className="footer-copyright">
          © {year} Vaishnavi Gaikwad. All rights reserved.
        </p>
        <a className="text-link" href="#top" data-testid="link-back-to-top">
          Back to top <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
