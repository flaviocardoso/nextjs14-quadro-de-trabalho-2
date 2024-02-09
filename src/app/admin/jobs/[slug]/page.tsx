import NotFound from "@/app/not-found";
import JobDetails from "@/components/JobDetails";
import prisma from "@/lib/prisma";
import AdminSidebar from "./AdminSidebar";
interface AdminJobsPageProps {
  params: { slug: string };
}

export default async function AdminJobsPage({
  params: { slug },
}: AdminJobsPageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });
  if (job) {
    const jobConvert = { ...job, companyLogo: JSON.parse(JSON.stringify(job.companyLogo))};
    return <main className="grow flex my-10 max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobDetails job={job} />
      <AdminSidebar job={jobConvert} />
    </main>;
  } else {
    NotFound();
  }
}
