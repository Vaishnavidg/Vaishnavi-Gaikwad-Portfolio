import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span className="footer-mark">VG / portfolio</span>
        <p>Designed, built, and still thinking about it.</p>
        <a className="text-link" href="#top" data-testid="link-back-to-top">
          Back to top <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
