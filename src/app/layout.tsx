import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Мягкие окна в Казани | Продажа и монтаж ПВХ-штор",
  description: "Качественные мягкие окна (ПВХ-шторы) для беседок, террас и веранд в Казани и Татарстане. От производителя, быстрый монтаж, гарантия 5 лет.",
  keywords: "мягкие окна казань, пвх шторы татарстан, прозрачные шторы для беседки, окна для террасы казань, гибкие окна",
  openGraph: {
    title: "Мягкие окна в Казани | Продажа и монтаж",
    description: "Надежная защита вашей беседки или террасы от непогоды с помощью гибких ПВХ окон в Казани.",
    type: "website",
    locale: "ru_RU",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
