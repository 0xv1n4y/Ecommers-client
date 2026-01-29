"use client";

import Link from "next/link";
import { ShoppingCart, User  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theam/theme-toggle";

export function HeaderActions() {

    return(
        <div className="flex items-center gap-2">
             {/* Cart */}
            <Link href="/cart">
                <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                </Button>
            </Link>

            {/* Login */}
            <Link href="/login">
                <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                </Button>
            </Link>

            {/* Theme */}
            <ThemeToggle />
    </div>
    )

}