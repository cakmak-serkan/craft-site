import '@/app/styles/globals.css';
import "@/app/styles/app.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Craft Coffee Shop",
  description: "Craft Coffe Shop Uckfield",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>        
      <body className={inter.className}>{children}</body>
    </html>
  )
}
