import Header from "@/components/Header";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const f = Inter({ subsets: ["latin"] });

export default function AppLayout({children}: LayoutProps) {
  return (
    <div className={`relative ${f.className}`}>
      <Header />
      {children}
    </div>
  );
}