import Link from "next/link";

const navItems = [
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
];

export function HeaderNav() {
    return (
        <nav className="hidden md:flex items-center gap-6">

            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium">
                    {item.label}
                </Link>
            ))}
            
        </nav>
       
    )
}