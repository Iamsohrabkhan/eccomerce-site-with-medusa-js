import AppProvider from "@/Components/context-api/AppContext";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
