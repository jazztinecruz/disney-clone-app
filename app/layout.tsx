import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter } from "@next/font/google";
import Sidebar from "../components/sidebar";

const inter = Inter();

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className="bg-background-dark text-typography-light">
      <head />
      <body className={inter.className}>
        <div className="grid grid-cols-[auto,1fr]">
          <aside>
            <Sidebar />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
