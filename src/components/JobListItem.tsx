import { Job } from "@prisma/client";
import companyLogoPlacer from "@/assets/company-logo-placeholder.png";
import Image, { StaticImageData } from "next/image";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { decodingImageUrl, formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogo,
    createdAt,
  },
}: JobListItemProps) {
  let logoSrc: StaticImageData | string = companyLogoPlacer;
  if (companyLogo) {
    logoSrc = decodingImageUrl(companyLogo);
  }

  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image 
        className="rounded-lg self-center"
        src={logoSrc} 
        alt={`${companyName} logo`} 
        width={100} height={100} />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0"  />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={16} className="shrink-0"  />
            {locationType}
          </p>
          <p className="flex items-center gap-1.5">
            <Globe2 size={16} className="shrink-0"  />
            {location || "Worldwide"}
          </p>
          <p className="flex items-center gap-1.5">
            <Banknote size={16} className="shrink-0"  />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0"  />
            {relativeDate(createdAt)}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col shrink-0 items-end justify-between">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
}
