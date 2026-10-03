import { redirect } from "next/navigation";

export default function LoginPage() {
  redirect("/academy/admin/login");
}

export const metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: "/academy/login" },
};
