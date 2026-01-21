"use client";

import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "./ReactQueryProvider";
import { ShareDataProvider } from "./ShareData";

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ReactQueryProvider>
        <ShareDataProvider>{children}</ShareDataProvider>
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
