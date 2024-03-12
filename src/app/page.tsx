'use client'
import CountryList from "@/components/CountryList";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="dark">
        <CountryList />
      </main>
    </NextUIProvider>

  );
}
