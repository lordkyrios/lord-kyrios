import React from "react";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import "../styles/globals.css"; // only if you have global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
