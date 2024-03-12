'use client'
import App from "@/components/App";
import CountryList from "@/components/CountryList";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <App />
      </main>
    </NextUIProvider>

  );
}
