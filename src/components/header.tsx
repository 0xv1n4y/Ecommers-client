"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle"


export function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container h-16 flex items-center justify-between">
                {/* Logo / Brand Name */}
                <Link href="/" className="text-lg font-bold">
                    E-Commerce
                </Link>

                {/* Right Side */}
                <nav className="flex items-center gap-4">
                    <Link href="/products" className="text-sm font-medium">
                        Products
                    </Link>

                    <Link href="/cart" className="text-sm font-medium">
                        Cart
                    </Link>

                    <ThemeToggle />
                </nav>

            </div>

        </header>
    )
}