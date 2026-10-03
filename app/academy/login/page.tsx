import { redirect } from "next/navigation";

export default function LoginPage() {
  redirect("/academy/admin/login");
}

export const metadata = { alternates: { canonical: "/academy/login" } };
