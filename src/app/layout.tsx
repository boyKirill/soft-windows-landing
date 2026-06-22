import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-sans antialiased bg-background text-foreground"
        style={{ '--font-montserrat': '"Montserrat", sans-serif' } as React.CSSProperties}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
