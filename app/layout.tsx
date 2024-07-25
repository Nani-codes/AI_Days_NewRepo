import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import Layout from '../components/Layout';
import * as React from "react";

export const metadata: Metadata = {
  title: "AIDays",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
