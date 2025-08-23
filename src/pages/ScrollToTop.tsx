import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top after route change
    window.scrollTo({ top: 0, behavior: "instant" });

    // Extra fix: slight delay to handle slow renders
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
