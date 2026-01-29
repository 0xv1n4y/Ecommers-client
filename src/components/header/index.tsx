"use client"

import { Logo } from "./logo"
import { HeaderNav } from "./nav"
import { HeaderSearch } from "./search"
import { HeaderActions } from "./actions"

export function Header() {
  return (
    <header className="border-b bg-background px-6 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6 ">
          <Logo />
          <HeaderNav />
        </div>

        <HeaderSearch />

        <HeaderActions />
      </div>
    </header>
  )
}
