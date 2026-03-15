"use client";

import { Logo } from "@/components/ui/logo";
import { Globe, Share2 } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 overflow-x-hidden">
      <ScrollReveal
        direction="up"
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Logo className="text-white" />
            <p className="max-w-md">
              A premium consultancy firm based in the UK, helping international
              organizations navigate the digital frontier through expert
              management and strategic excellence.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://abbandesha.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit ABBANDESHA website"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Globe className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/abbandesha"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit ABBANDESHA LinkedIn page"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Share2 className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 text-sm"
            >
              <motion.li variants={itemVariants}>
                <Link
                  href="/"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/#about"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/#services"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  Our Services
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/#contact"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 text-sm"
            >
              <motion.li variants={itemVariants}>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/terms-of-service"
                  className="hover:text-primary hover:underline transition-all inline-block"
                >
                  Terms of Service
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} ABBANDESHA LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p>Company Number: 12345678</p>
            <p>Registered in England & Wales</p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
