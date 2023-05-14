import "@styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Prompts",
  description: "AI generated writing prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback={"Loading..."}>
          <Provider>
            {" "}
            <div className='main'>
              <div className=' gradient' />
            </div>
            <main className='app'>
              <Nav />
              {children}
            </main>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
