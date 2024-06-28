"use client";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
import SideBar from "@/components/navigation/sidebar";
import Topbar from "@/components/navigation/topbar";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth <= 1000) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  return (
    <>
      <Topbar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full">
        <SideBar showNav={showNav} setShowNav={setShowNav} />
      </Transition>
      <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
        <div className="px-4 md:px-16">{children}</div>
        {/* <SpeedInsights /> */}
      </main>
    </>
  );
}
