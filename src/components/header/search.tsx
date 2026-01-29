"use client";

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function HeaderSearch() {

    return(
        <div className="hidden lg:flex items-center relative w-72">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground"/>
            <Input  className="pl-9" type="text" placeholder="Search products..." />
        </div>

    )
}