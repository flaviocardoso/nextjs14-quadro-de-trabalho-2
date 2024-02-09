import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";
import { UserResource } from "@clerk/types";
import { User } from "@clerk/nextjs/server"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}

export function toSlug(str: string) {
  return str.toLocaleLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

export async function encodingImageUrl(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export function decodingImageUrl(bytes: Buffer, mine = '*') {
  return `data:image/${mine};base64,` + bytes.toString('base64');
}

export function isAdmin(user: UserResource | User) {
  return user.publicMetadata?.role === "admin";
}
