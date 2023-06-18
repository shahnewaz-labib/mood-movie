import React from "react";
import "./globals.css";
// import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MMovies",
  description: "Welcome to MMovies",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
