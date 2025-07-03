import React, { ReactNode } from "react";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function PublicLayout({
  children,
  modal,
  params,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale}>
      {children}
      {modal}
    </NextIntlClientProvider>
  );
}
