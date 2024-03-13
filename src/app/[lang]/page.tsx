import { Locale } from "@/i18n";
import { useTranslations } from "next-intl";
import Comp from "../../components/Comp";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  unstable_setRequestLocale(lang);
  const t = useTranslations();
  return (
    <div>
      <LocaleSwitcher />
      <Comp title={t("title")} />
    </div>
  );
}
