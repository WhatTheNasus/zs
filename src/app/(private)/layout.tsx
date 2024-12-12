"use client";

import { ReactNode } from "react";
import PrivateContent from "@/components/AuthGuard";

/**
 * PrivateLayout Component
 * Wraps content in an authentication guard to ensure only authorized users can access it.
 */
export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <PrivateContent>
      <main>{children}</main>
    </PrivateContent>
  );
}
