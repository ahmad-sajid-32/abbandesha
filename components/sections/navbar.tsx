"use client"

import * as React from "react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence, Variants } from "motion/react"
import { useTheme } from "@/components/theme-provider"

const navVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const { theme, setTheme } = useTheme()

  // Prevent scrolling when sidebar is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Track active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = ""
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || ""
        }
      })
      
      if (window.scrollY < 100) {
        current = ""
      }
      
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#", id: "" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: 90 }}>
                <Menu className="h-6 w-6" />
              </motion.div>
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-surface border-l border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border h-20">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close Menu">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: -90 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                <motion.nav 
                  variants={navVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-2 mt-4"
                >
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id
                    return (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link 
                          href={link.href} 
                          onClick={() => setIsOpen(false)} 
                          className={`block text-lg font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive 
                              ? "bg-primary text-primary-foreground shadow-md" 
                              : "hover:bg-primary hover:text-primary-foreground hover:shadow-md text-foreground"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Button size="lg" className="w-full h-14 text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-300">Get a Quote</Button>
                  <p className="text-sm text-muted-foreground text-center">
                    info@abbandesha.com<br/>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
