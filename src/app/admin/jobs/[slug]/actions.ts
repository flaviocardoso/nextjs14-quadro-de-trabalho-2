"use server";

import { isAdmin } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;
export async function approvedSubmission(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);
    /*
    TODO para autenticação de usuário
    const user = await currentUser();
    if (!user || !isAdmin(user)) {
      throw new Error("Not authorized");
    }
    */
    await prisma.job.update({
      where: { id: jobId },
      data: { approved: true },
    });
    revalidatePath("/", "page");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function deleteJob(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // throw new Error("boood!!")
    const jobId = parseInt(formData.get("jobId") as string);
    /*
    TODO para autenticação de usuári
    const user = await currentUser();
    if (!user || !isAdmin(user)) {
      throw new Error("Not authorized");
    }
    */
    /*
    const job = await prisma.job.findUnique({
      where: {id: jobId}
    })
    //TODO para vercel blob
    if (job?.companyLogo) {
      await del(job.companyLogo)
    }
    */
    await prisma.job.delete({
      where: { id: jobId },
    });
    revalidatePath("/", "page");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
  redirect("/admin");
}
