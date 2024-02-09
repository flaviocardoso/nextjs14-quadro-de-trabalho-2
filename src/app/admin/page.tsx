import JobListItem from "@/components/JobListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  return (
    <main className="grow m-auto my-10 max-w-5xl space-y-10 px-3">
      <H1 className="text-center">Admin dashboard</H1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs: </h2>
        {unapprovedJobs.map((job) => (
          <Link className="block" href={`/admin/jobs/${job.slug}`} key={job.id}>
            <JobListItem job={job} />
          </Link>
        ))}
        {!unapprovedJobs.length && <p className="text-muted-foreground">Não tem mais trabalhos para aprovar</p>}
      </section>
    </main>
  );
}
