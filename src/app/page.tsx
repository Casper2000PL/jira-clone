"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      console.log("No user data available");
      router.push("/sign-in");
    } else {
      console.log("User data:", data);
    }
  }, [data]);

  return (
    <div className="flex gap-4">
      <div>Only visible to authorized users</div>
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
