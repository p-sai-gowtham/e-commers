import { Cairo } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "900"],
  display: "swap",
});

export const metadata = {
  title: "Ogani | Template",
  description: "Ogani Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cairo.className}>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />
        <link
          rel="stylesheet"
          href="/css/font-awesome.min.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/css/elegant-icons.css"
          type="text/css"
        />
        <link rel="stylesheet" href="/css/nice-select.css" type="text/css" />
        <link
          rel="stylesheet"
          href="/css/jquery-ui.min.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/css/owl.carousel.min.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/css/slicknav.min.css"
          type="text/css"
        />
        <link rel="stylesheet" href="/css/style.css" type="text/css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
