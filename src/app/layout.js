import { Baloo_2, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import localFont from 'next/font/local'

const consolas = localFont({
  src: [
    { path: '../../public/fonts/consolas-regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/consolas-bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/consolas-italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/consolas-bold-italic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-consolas-local',
  display: 'swap',
})

const haettenschweiler = localFont({
  src: '../../public/fonts/haettenschweiler.ttf',
  variable: '--font-haettenschweiler',
  display: 'swap',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo',
  display: 'swap',
})

export const metadata = {
  title: "ESI101",
  description: "Discover student life, get answers to your questions, and know what to expect when you arrive.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${haettenschweiler.variable} ${consolas.variable} h-full antialiased`} suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
