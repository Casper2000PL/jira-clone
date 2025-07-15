import { Loader } from "lucide-react";
import React from "react";

const PageLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default PageLoader;
