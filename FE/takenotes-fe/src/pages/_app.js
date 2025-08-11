import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className='max-w-[1440px] mx-auto overflow-hidden min-h-screen'>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
