import type { Metadata } from "next";

// Account pages have no search value — keep them out of Google without
// blocking access.
export const metadata: Metadata = {
  title: "Login",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
