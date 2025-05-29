// "use client";

// import { useState, useEffect, useRef } from "react";
// import { navMenu } from "@/data";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { useType } from "@/context/typeContext";
// import { gsap } from "gsap";

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);
//   const { setType, type } = useType();

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   // Prevent scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       // Prevent scrolling on both body and html
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.top = `-${window.scrollY}px`;
//       document.body.style.width = "100%";
//     } else {
//       // Restore scrolling
//       const scrollY = document.body.style.top;
//       document.body.style.overflow = "";
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//       if (scrollY) {
//         window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
//       }
//     }

//     return () => {
//       // Cleanup on unmount
//       document.body.style.overflow = "";
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.width = "";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop && scrollTop > 100) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//       setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   // Close menu when clicking outside or on escape
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscape);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [isOpen]);

//   const buttonRef = useRef(null);
//   const circleRef = useRef(null);
//   const [animating, setAnimating] = useState(false);

//   function handleClick() {
//     if (animating) return;

//     const button = buttonRef.current;
//     const circle = circleRef.current;
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
//     const rect = button.getBoundingClientRect();

//     setAnimating(true);

//     // Calculate button center relative to viewport
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     // Calculate max distance from button center to viewport corners
//     const distances = [
//       Math.hypot(centerX - 0, centerY - 0), // top-left
//       Math.hypot(centerX - vw, centerY - 0), // top-right
//       Math.hypot(centerX - 0, centerY - vh), // bottom-left
//       Math.hypot(centerX - vw, centerY - vh), // bottom-right
//     ];
//     const radius = Math.max(...distances);

//     const bgColor = type ? "#16A34A" : "#2563EB";

//     // Reset circle style and position on button center
//     gsap.set(circle, {
//       width: 0,
//       height: 0,
//       x: centerX,
//       y: centerY,
//       marginLeft: 0,
//       marginTop: 0,
//       opacity: 1,
//       scale: 1,
//       borderRadius: "50%",
//       position: "fixed",
//       backgroundColor: bgColor,
//       pointerEvents: "none",
//       zIndex: 9999,
//     });

//     // Animate circle expanding to cover screen
//     gsap.to(circle, {
//       duration: 0.6,
//       width: 5000,
//       height: 5000,
//       marginLeft: -radius,
//       marginTop: -radius,
//       ease: "power2.out",
//       onComplete: () => {
//         // Fade out circle after expand
//         gsap.to(circle, {
//           duration: 0.4,
//           opacity: 0,
//           onComplete: () => setAnimating(false),
//         });
//       },
//     });
//   }

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-[51] w-full bg-foreground border-b border-zinc-800 transition-transform duration-300 ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img src="/fast-apps.png" alt="logo" className="h-6 md:h-8" />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-3">
//             {navMenu?.map((item) => (
//               <Link
//                 key={item.href}
//                 to={item.href}
//                 className={`px-3 py-2 transition font-medium ${
//                   item.href === "/"
//                     ? pathname === "/"
//                       ? "border-b border-white"
//                       : "hover:text-gray-300"
//                     : pathname.startsWith(item.href)
//                     ? "border-b border-white"
//                     : "hover:text-gray-300"
//                 }`}
//               >
//                 {item.title}
//               </Link>
//             ))}

//             <Button
//               ref={buttonRef}
//               onClick={() => {
//                 setType((type) => !type);
//                 setIsOpen(false);
//                 handleClick();
//               }}
//               className="relative text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200 cursor-pointer active:scale-95 transition-all"
//             >
//               Switch
//               <div
//                 ref={circleRef}
//                 className={`fixed rounded-full pointer-events-none z-[999]`}
//               />
//             </Button>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <Button
//               onClick={toggleMenu}
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-zinc-800 cursor-pointer active:scale-95 transition-all"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-[100] bg-foreground bg-opacity-50 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full bg-foreground z-[101] md:hidden transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Mobile Header */}
//           <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
//             <div className="flex items-center gap-2">
//               <img src="/fast-apps.png" alt="logo" className="h-6" />
//             </div>
//             <Button
//               onClick={toggleMenu}
//               variant="ghost"
//               size="icon"
//               className="text-white hover:bg-zinc-800"
//             >
//               <X size={24} />
//             </Button>
//           </div>

//           {/* Mobile Navigation Links */}
//           <div className="flex flex-col items-center justify-center flex-1 space-y-3 px-2">
//             {navMenu?.map((item) => {
//               const isDocsParent = item.href === "/docs";
//               const isQuickStart =
//                 pathname === "/docs/getting-started/quick-start-guide";

//               const isActive =
//                 item.href === "/"
//                   ? pathname === "/"
//                   : isDocsParent
//                   ? pathname.startsWith("/docs") && !isQuickStart
//                   : pathname === item.href;

//               return (
//                 <Link
//                   key={item.href}
//                   to={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`text-base font-medium transition-colors ${
//                     isActive
//                       ? "text-white border-b border-white pb-1"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {item.title}
//                 </Link>
//               );
//             })}

//             <Link
//               to="/docs/getting-started/quick-start-guide"
//               onClick={() => setIsOpen(false)}
//               className={`text-base font-medium transition-colors ${
//                 pathname === "/docs/getting-started/quick-start-guide"
//                   ? "text-white border-b border-white pb-1"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               Quick Start
//             </Link>

//             <Button
//               ref={buttonRef}
//               onClick={() => {
//                 setType((type) => !type);
//                 setIsOpen(false);
//                 handleClick();
//               }}
//               className="relative text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200"
//             >
//               Switch
//               <div
//                 ref={circleRef}
//                 className={`fixed rounded-full pointer-events-none z-[999]`}
//               />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Spacer for fixed navbar */}
//       <div className="h-16 md:h-20" />
//     </>
//   );
// };

// export default Navbar;
"use client";

import { useState, useEffect, useRef } from "react";
import { navMenu } from "@/data";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useType } from "@/context/typeContext";
import { gsap } from "gsap";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { setType, type } = useType();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Separate refs for desktop and mobile switch buttons & circles
  const desktopButtonRef = useRef(null);
  const desktopCircleRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const mobileCircleRef = useRef(null);

  const [animating, setAnimating] = useState(false);

  function animateCircle(button, circle) {
    if (animating) return;

    if (!button || !circle) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = button.getBoundingClientRect();

    setAnimating(true);

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distances = [
      Math.hypot(centerX - 0, centerY - 0),
      Math.hypot(centerX - vw, centerY - 0),
      Math.hypot(centerX - 0, centerY - vh),
      Math.hypot(centerX - vw, centerY - vh),
    ];
    const radius = Math.max(...distances);

    const bgColor = type ? "#16A34A" : "#2563EB";

    gsap.set(circle, {
      width: 0,
      height: 0,
      x: centerX,
      y: centerY,
      marginLeft: 0,
      marginTop: 0,
      opacity: 1,
      scale: 1,
      borderRadius: "50%",
      position: "fixed",
      backgroundColor: bgColor,
      pointerEvents: "none",
      zIndex: 9999,
    });

    gsap.to(circle, {
      duration: 0.6,
      width: 5500,
      height: 5500,
      marginLeft: -radius,
      marginTop: -radius,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(circle, {
          duration: 0.4,
          opacity: 0,
          onComplete: () => setAnimating(false),
        });
      },
    });
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[51] w-full bg-foreground border-b border-zinc-800 transition-transform duration-300 ${
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
              ref={desktopButtonRef}
              onClick={() => {
                setType((type) => !type);
                setIsOpen(false);
                animateCircle(desktopButtonRef.current, desktopCircleRef.current);
              }}
              className="relative text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200 cursor-pointer active:scale-95 transition-all"
            >
              Switch
              <div
                ref={desktopCircleRef}
                className="fixed rounded-full pointer-events-none z-[999]"
              />
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800 cursor-pointer active:scale-95 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-foreground bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
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
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-1 space-y-3 px-2">
            {navMenu?.map((item) => {
              const isDocsParent = item.href === "/docs";
              const isQuickStart =
                pathname === "/docs/getting-started/quick-start-guide";

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : isDocsParent
                  ? pathname.startsWith("/docs") && !isQuickStart
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-white border-b border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
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

            <Button
              ref={mobileButtonRef}
              onClick={() => {
                setType((type) => !type);
                setIsOpen(false);
                animateCircle(mobileButtonRef.current, mobileCircleRef.current);
              }}
              className="relative text-sm rounded-full mt-2 bg-background text-foreground hover:bg-gray-200"
            >
              Switch
              <div
                ref={mobileCircleRef}
                className="fixed rounded-full pointer-events-none z-[999]"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;

