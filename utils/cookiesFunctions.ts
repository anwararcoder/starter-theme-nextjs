"use server";

import { cookies } from "next/headers";

export async function setLanguage(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set("LANG", locale);
}

export async function getLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get("LANG");
}
export async function getToken() {
  const cookieStore = await cookies();
  return cookieStore.get("token");
}