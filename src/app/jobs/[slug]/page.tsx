import { cache } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobDetails from "@/components/JobDetails";
import { Button } from "@/components/ui/button";

interface SlugPageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug }
  });
  if (!job) notFound();
  return job;
})

export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true},
    select: {slug: true}
  });
  return jobs.map(({slug}) => slug);
}

export async function generateMedata({params: {slug}}: SlugPageProps): Promise<Metadata> {
  const job = await getJob(slug);
  return {
    title: `${job.title} | Flow jobs`
  }
}

export default async function SlugPage({ params: { slug } }: SlugPageProps) {
  const job = await getJob(slug);
  const {applicationEmail, applicationUrl} = job;
  const applitionLink = applicationEmail ? 
  `mailto:${applicationEmail}` : applicationUrl;
  if (!applitionLink) {
    console.error("Job has no application link or email");
    notFound();
  }
  return <main className="grow max-w-5xl m-auto my-10 flex flex-col items-center gap-5 px-3 md:flex-row md:items-start">
    <JobDetails job={job} />
    <aside>
      <Button asChild>
        <a href={applitionLink} className="w-40 md:w-fit">
          Apply now
        </a>
      </Button>
    </aside>
  </main>;
}
