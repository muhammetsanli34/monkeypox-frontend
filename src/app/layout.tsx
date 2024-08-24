import { Metadata } from "next";
import "../index.css";
import Navbar from "../components/navbar";
import "leaflet/dist/leaflet.css";

export const metaData: Metadata = {
  title: "Track Monkey Pox",
  description: "Track Monkey Pox",
  keywords: "Track Monkey Pox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
