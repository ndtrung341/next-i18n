import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { Locale, i18n } from "./i18n";

export default async function middleware(req: NextRequest) {
  let defaultLocale = req.cookies.get("MY_LOCALE")?.value;

  if (!defaultLocale) {
    try {
      const res = await fetch(`https://ipapi.co/json/`);
      const data = await res.json();
      const locale = data.languages;

      defaultLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
    } catch (error) {
      //
    }
  }

  const handleI18nRouting = createIntlMiddleware({
    locales: i18n.locales,
    defaultLocale: defaultLocale as Locale,
    localePrefix: "always",
    localeDetection: false, // disable default cookie 'NEXT_LOCALE' of next-intl
  });

  const response = handleI18nRouting(req);
  response.cookies.set("MY_LOCALE", defaultLocale as string);

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
