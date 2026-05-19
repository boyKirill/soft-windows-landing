import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Мягкие окна | Продажа и монтаж ПВХ-штор",
  description: "Качественные мягкие окна (ПВХ-шторы) для беседок, террас и веранд. Индивидуальный расчет, быстрый монтаж, гарантия качества.",
  keywords: "мягкие окна, пвх шторы, прозрачные шторы, окна для беседки, окна для террасы",
  openGraph: {
    title: "Мягкие окна | Продажа и монтаж",
    description: "Надежная защита вашей беседки или террасы от непогоды с помощью гибких ПВХ окон.",
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
    <html lang="ru">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
