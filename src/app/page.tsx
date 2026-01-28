import Image from "next/image";

export default function Home() {
 return(
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold font-sans">
          E-commerce Design System ✅
        </h1>

        <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
 )
}
