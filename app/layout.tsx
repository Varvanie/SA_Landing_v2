import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  // 🏆 НАСТРОЙКА ЗАГОЛОВКА (TITLE)
  title: {
    default: "Surveyor's Assistant — ИИ-помощник для кадастровых инженеров",
    template: "%s | Surveyor's Assistant", // На других страницах будет: "Контакты | Surveyor's Assistant"
  },

  description:
    "Автоматизируйте работу с пространственными данными. Surveyor's Assistant — система с ИИ для кадастровых инженеров: меньше ошибок, выше точность, быстрее межевание.",
  keywords: [
    "кадастровые инженеры",
    "автоматизация кадастровых работ",
    "ИИ в геодезии",
    "цифровизация землеустройства",
    "Surveyor's Assistant",
  ],
  authors: [{ name: "Команда Surveyor's Assistant" }],
  creator: "Surveyor's Assistant",
  publisher: "Surveyor's Assistant",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://surveyors-assistant.ru",
    siteName: "Surveyor's Assistant",
    title: "Surveyor's Assistant — ИИ для кадастровых инженеров",
    description:
      "Автоматизируйте рутину и повысьте точность кадастровых работ с помощью интеллектуального помощника.",
    images: [
      {
        url: "https://surveyors-assistant.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Surveyor's Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Surveyor's Assistant — ИИ для кадастровых инженеров",
    description:
      "Автоматизируйте рутину и повысьте точность кадастровых работ.",
    images: ["https://surveyors-assistant.ru/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://surveyors-assistant.ru",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
