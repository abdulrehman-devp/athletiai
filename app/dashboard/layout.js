"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function DashboardLayout({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect to home if not authenticated
  if (isLoaded && !isSignedIn) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
}
