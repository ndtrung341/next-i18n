import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { i18n } from "@/i18n";

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales: i18n.locales,
  pathnames: {},
  localePrefix: undefined,
});
