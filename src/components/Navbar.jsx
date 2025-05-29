// import { useType } from "@/context/typeContext";
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "./ui/button";
// import { Menu, X } from "lucide-react";
// import { navMenu } from "@/data";

// const Navbar = () => {
//   const location = useLocation();
//   const { setType } = useType();
//   const [isOpen, setIsOpen] = useState(false);
  
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   // Disable scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//       const handleScroll = () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
//         if (scrollTop > lastScrollTop && scrollTop > 100) {
//           setIsVisible(false);
//         } else {
//           setIsVisible(true);
//         }
//         setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
//       };
  
//       window.addEventListener("scroll", handleScroll);
  
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [lastScrollTop]);

//   return (
//     <nav className="z-50 w-full bg-foreground border-b border-zinc-800 px-0 md:px-[10vw]">
//       <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/fast-apps.png" alt="logo" className="h-6 md:h-8" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden sticky top-0 left-0 md:flex items-center gap-3">
//           {navMenu?.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               className={`text-sm px-3 py-2 transition font-medium ${
//                 item.href === "/"
//                   ? location.pathname === "/"
//                     ? "border-b"
//                     : "hover:text-gray-300"
//                   : location.pathname.startsWith(item.href)
//                   ? "border-b"
//                   : "hover:text-gray-300"
//               }`}
//             >
//               {item.title}
//             </Link>
//           ))}

//           <Button
//             onClick={() => setType((type) => !type)}
//             className="px-3 rounded-full font-medium text-xs cursor-pointer active:scale-95 transition-all bg-background text-foreground hover:bg-gray-200"
//           >
//             Switch
//           </Button>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <Button
//             onClick={toggleMenu}
//             variant="ghost"
//             size="icon"
//             className="text-white"
//           >
//             {isOpen ? <X size={50} /> : <Menu size={50} />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className={`mobile-links absolute top-[10vh] left-0 w-screen overflow-hidden h-screen z-[100] bg-foreground flex flex-col items-center justify-center space-y-6
//         transition-all duration-500 ease-in-out transform pointer-events-none ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//         }}>
//         {/* <div className="md:hidden top-[10vh] w-[100vw] h-screen bg-foreground z-[999] flex flex-col items-center justify-center px-4 pb-4 space-y-2 pointer-events-none"> */}
//           {navMenu?.map((item) => {
//             const isDocsParent = item.href === "/docs";
//             const isQuickStart =
//               location.pathname === "/docs/getting-started/quick-start-guide";

//             const isActive =
//               item.href === "/"
//                 ? location.pathname === "/"
//                 : isDocsParent
//                 ? location.pathname.startsWith("/docs") && !isQuickStart
//                 : location.pathname === item.href;
//             return (
//               <Link
//                 key={item.href}
//                 to={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-sm px-3 py-2 transition font-medium pointer-events-auto ${
//                   isActive ? "border-b" : "hover:text-gray-300"
//                 }`}
//               >
//                 {item.title}
//               </Link>
//             );
//           })}
//           <Link
//             key={"/docs/getting-started/quick-start-guide"}
//             to={"/docs/getting-started/quick-start-guide"}
//             onClick={() => setIsOpen(false)}
//             className={`text-sm px-3 py-2 transition pointer-events-auto font-medium ${
//               location.pathname === "/docs/getting-started/quick-start-guide"
//                 ? "border-b"
//                 : "hover:text-gray-300"
//             }`}
//           >
//             Quick Start
//           </Link>
//           <Button
//             onClick={() => {
//               setType((type) => !type);
//               setIsOpen(false);
//             }}
//             className="text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200"
//           >
//             Switch
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



"use client"

import { useState, useEffect } from "react"
import { navMenu } from "@/data";
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useType } from "@/context/typeContext";


// Mock data - replace with your actual navMenu data
// const navMenu = [
//   { href: "/", title: "Home" },
//   { href: "/docs", title: "Docs" },
//   { href: "/about", title: "About" },
//   { href: "/contact", title: "Contact" },
// ]

const Navbar = () => {
  const {pathname} = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const { setType } = useType();


  const toggleMenu = () => setIsOpen((prev) => !prev)

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on both body and html
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-foreground border-b border-zinc-800 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/fast-apps.png" alt="logo" className="h-6 md:h-8" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navMenu?.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 transition font-medium ${
                  item.href === "/"
                    ? pathname === "/"
                      ? "border-b border-white"
                      : "hover:text-gray-300"
                    : pathname.startsWith(item.href)
                      ? "border-b border-white"
                      : "hover:text-gray-300"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <Button
            onClick={() => {
              setType((type) => !type);
              setIsOpen(false);
            }}
            className="text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200"
          >
            Switch
          </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-white hover:bg-zinc-800 cursor-pointer active:scale-95 transition-all">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-foreground bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-foreground z-[101] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <img src="/fast-apps.png" alt="logo" className="h-6" />
            </div>
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
              <X size={24} />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-1 space-y-3 px-2">
            {navMenu?.map((item) => {
              const isDocsParent = item.href === "/docs"
              const isQuickStart = pathname === "/docs/getting-started/quick-start-guide"

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : isDocsParent
                    ? pathname.startsWith("/docs") && !isQuickStart
                    : pathname === item.href

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive ? "text-white border-b border-white pb-1" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}

            <Link
              to="/docs/getting-started/quick-start-guide"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors ${
                pathname === "/docs/getting-started/quick-start-guide"
                  ? "text-white border-b border-white pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Quick Start
            </Link>

            {/* <Button
              onClick={() => setType(prev => !prev)}
              className="text-base font-medium rounded-full mt-8 bg-white text-black hover:bg-gray-200 px-8 py-3"
            >
              Switch
            </Button> */}
            <Button
            onClick={() => {
              setType((type) => !type);
              setIsOpen(false);
            }}
            className="text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200"
          >
            Switch
          </Button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navbar;
