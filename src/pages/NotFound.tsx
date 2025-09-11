import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Looks like this page took a wrong turn. Let's get you back to IELTS success!
          </p>
        </div>
        <Button variant="cta" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Fluentli.ai
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
