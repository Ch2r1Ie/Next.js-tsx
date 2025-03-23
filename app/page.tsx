import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 min-w-[200px]">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-sm md:max-w-lg lg:max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-6">
          Welcome to my Next.ts Portfolio
        </h1>
        <div className="flex flex-col space-y-4">
          {[
            { href: "/loginFacebookBadge", label: "[Login] Facebook Badge" },
            { href: "/loginStripeBadge", label: "[Login] Stripe Badge" },
            { href: "/loginStyleBadge", label: "[Login] Style Badge" },
            { href: "/navbar", label: "[Navbar]" },
            { href: "/shadcn", label: "[Sidebar]" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <p className="bg-white border border-blue-500 text-blue-600 font-bold py-2 px-4 rounded transition hover:bg-blue-500 hover:text-white cursor-pointer">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
