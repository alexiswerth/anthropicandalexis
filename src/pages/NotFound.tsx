import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <h1 className="text-7xl font-bold font-heading text-accent mb-2">404</h1>
        <p className="text-xl text-primary font-heading mb-2">Page not found</p>
        <p className="text-sm text-muted-foreground font-body mb-8">
          The page <code className="px-1.5 py-0.5 rounded bg-muted text-accent text-xs">{location.pathname}</code> does not exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
