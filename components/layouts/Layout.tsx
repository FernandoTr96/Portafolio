import Head from "next/head";
import { FC } from "react"
import { Navbar, FloatingMenu,Footer } from "../ui";
import { NavbarMenu } from '../ui/NavbarMenu';
import { gsap } from 'gsap';

if (typeof window !== "undefined") {
  const ScrollTrigger = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

interface props {
  children: JSX.Element;
  title: string;
  description: string;
  keywords: string;
}

const RootLayout: FC<props> = ({ children, title, description, keywords}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
          <Navbar/>
          {children}
          <Footer/>
          <NavbarMenu/>
          <FloatingMenu/>
      </main>
    </>
  )
}

export default RootLayout