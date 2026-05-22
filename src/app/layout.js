import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";



const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Qylentra  - Book Doctor Appointments Online",
  description:
    "Book appointments with trusted doctors online. Find specialists and manage healthcare easily.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
