"use client";

import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

import { CategoryProvider } from "@/context/category";
import { ProductProvider } from "@/context/product";
import { SessionProvider } from "next-auth/react";
import { TagProvider } from "@/context/tag";
import { Toaster } from "react-hot-toast";
import TopNav from "@/components/nav/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <CategoryProvider>
          <TagProvider>
            <ProductProvider>
              <body>
                <TopNav />
                <Toaster />
                {children}
              </body>
            </ProductProvider>
          </TagProvider>
        </CategoryProvider>
      </SessionProvider>
    </html>
  );
}
