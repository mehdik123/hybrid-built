import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-foreground">
      <div className="text-center px-6">
        <h1 className="mb-3 font-display text-5xl uppercase">404</h1>
        <p className="mb-6 font-editorial text-muted-foreground">Page not found.</p>
        <Link to="/" className="font-editorial text-sm uppercase tracking-[0.15em] text-red-br hover:underline">
          Back to start
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
