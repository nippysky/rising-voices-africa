import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import ScrollUp from "../components/ScrollUp";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#F6A933"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <ScrollUp />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
