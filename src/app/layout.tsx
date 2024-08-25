import "../index.css";
import Navbar from "../components/navbar";
import "leaflet/dist/leaflet.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata() {
  // get router url
  const headersList = headers();
  console.log(
    'headersList.get("x-url")',
    headersList.get("x-url")
  );
  const pathname = headersList.get("x-url") || "/";
  const t = await getTranslations();
  console.log("t", pathname);
  return {
    title: t(`meta.${pathname}.title`),
    description: t(`meta.${pathname}.description`),
  };
}

export default function RootLayout({
  children,
  params,
  title,
  description,
}: {
  children: React.ReactNode;
  params: { locale: string };
  title: string;
  description: string;
}) {
  unstable_setRequestLocale(params.locale);
  const messages = useMessages();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body>
        <div id="root">
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Navbar />

            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
