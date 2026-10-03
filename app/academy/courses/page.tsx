import { redirect } from "next/navigation";

export default function CoursesPage() {
  redirect("/academy/classes");
}
export const metadata = { alternates: { canonical: "/academy/courses" } };
