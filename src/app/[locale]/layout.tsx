import "../../index.css";
import Navbar from "../../components/navbar";
import "leaflet/dist/leaflet.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const messages = useMessages();
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
          rel="stylesheet"
        />

        <link rel="icon" href="./logo.ico" />
        <link rel="apple-touch-icon" href="./logo.ico" />



        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>

      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navbar />

          {children}
        </NextIntlClientProvider>
      </body>
    </>
  );
}
