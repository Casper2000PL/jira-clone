"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-y-4">
      <AlertTriangle className="size-10" />
      <p className="text-sm">Something went wrong</p>
      <Button variant="secondary" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
