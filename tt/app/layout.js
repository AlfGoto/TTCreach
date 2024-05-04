import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "the FORM",
  description: "this website is made for a Technical Test. I hope i will succeed !",
  generator: 'Next.js',
  applicationName: 'the FORM',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Supabase', 'shadcn-ui'],
  authors: [{ name: 'Alfred Gauthier', url: 'alfredgauthier.netlify.app' }],
  creator: 'Alfred Gauthier',
  publisher: 'Alfred Gauthier',
  languages: {
    'fr-FR': '/fr-FR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex w-[100svw] overflow-x-hidden"}>
        <div className="hidden md:block w-[30svw] border-r-[lightgray] border-r" id="leftDiv"></div>

        <div className="m-[1svh] w-[100svw] md:w-[60svw] p-[1svw] relative flex justify-center items-center flex-col" id="middleDiv">{children}</div>

        <div className="hidden md:block w-[30svw] border-l-[lightgray] border-l" id="rightDiv"></div>
        </body>
    </html>
  );
}
