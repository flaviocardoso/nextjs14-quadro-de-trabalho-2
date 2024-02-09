import NewJobForm from "@/components/NewJobForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a new job"
}

export default function NewJob() {
  return (
    <main className="grow max-w-3xl m-auto my-10 space-y-10">
      <NewJobForm />
      {/* teste */}
    </main>
  );
}