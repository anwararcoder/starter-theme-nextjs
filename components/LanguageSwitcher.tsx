"use client";

import { AxiosAPI } from "@/axios/axiosInstance";
import { setLanguage } from "@/utils/cookiesFunctions";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [, startTransition] = useTransition();

  function switchTo(locale: string) {
    startTransition(async () => {
      await setLanguage(locale);
      router.refresh();
    });
    AxiosAPI.defaults.headers["Accept-Language"] = locale;
    queryClient.invalidateQueries();
  }

  return (
    <div style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
      <button className="text-[22px]" onClick={() => switchTo("en")}>
        English
      </button>
      <button className="text-[22px]" onClick={() => switchTo("ar")}>
        العربية
      </button>
    </div>
  );
}
