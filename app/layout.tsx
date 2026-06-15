import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";


const editUndoBrk = localFont({
  src: '../public/edit-undo.brk.ttf',
  variable: '--font-editundo'
})

const pixelOperator8 = localFont({
  src: '../public/PixelOperator8.ttf',
  variable: '--font-pixel'
})

const pirkkala = localFont({
  src: '../public/pirkkala.ttf',
  variable: '--font-pirkkala'
})

const mario = localFont({
  src: '../public/mario.ttf',
  variable: '--font-mario'
})

export const metadata: Metadata = {
  title: "Calculate",
  description: "A YSWS about Calculators!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${editUndoBrk.variable} ${pixelOperator8.variable} ${pirkkala.variable} ${mario.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
