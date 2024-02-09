import { z } from "zod";
import { jobTypes, locationTypes } from "./job-types";

// string
const requiredString = z.string().min(1, "Required");
// number
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");
// files
const companyLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file"
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");
// options application
const applicationSchema = z
  .object({
    applicationEmail: z.string().max(100).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(100).url().optional().or(z.literal("")),
  })
  .refine((data) => data.applicationEmail || data.applicationUrl, {
    message: "Email or url is required",
    path: ["applicationEmail"],
  });
// options location
const locationSchema = z
  .object({
    locationType: requiredString.refine(
      (value) => locationTypes.includes(value),
      "Invalid location types"
    ),
    location: z.string().max(100).optional(),
  })
  .refine(
    (data) =>
      !data.locationType || data.locationType === "Remote" || data.location,
    {
      message: "Location is required on-site jobs",
      path: ["location"],
    }
  );

export const createJobSchema = z
  .object({
    // slug: z.string(),
    title: requiredString.max(100, "Precisa ser menor que 100 caracteres"),
    type: requiredString.refine(
      (value) => jobTypes.includes(value),
      "Invalid job type"
    ),
    companyName: requiredString.max(100),
    companyLogo: companyLogoSchema,
    description: z.string().max(5000).optional(),
    salary: numericRequiredString.max(
      9,
      "Number can't be longer than 9 digits"
    ),
    // approved: z.boolean(),
  })
  .and(applicationSchema)
  .and(locationSchema);

type createJobType = z.infer<typeof createJobSchema>;
export type createJobValues = createJobType;

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

type jobFilterType = z.infer<typeof jobFilterSchema>;
export type JobFilterValues = jobFilterType;