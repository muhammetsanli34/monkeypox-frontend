"use client";

import Error from "next/error";
import Navbar from "../components/navbar";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
