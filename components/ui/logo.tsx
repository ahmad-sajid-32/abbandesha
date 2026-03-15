import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false, ...props }: LogoProps) {
  return (
    <Link href="/">
      <div
        className={cn(
          "flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer",
          className,
        )}
        {...props}
      >
        <div className="relative h-8 w-8">
          <Image
            src="/logo.png"
            alt="Abbandesha logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        {!iconOnly && (
          <span className="hidden sm:block text-xl font-bold tracking-tight text-primary uppercase">
            Abbandesha
          </span>
        )}
      </div>
    </Link>
  );
}
