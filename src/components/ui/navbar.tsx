import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
    return (
        <nav
            className="
        w-full
        border-b
        px-[24px]
        py-[12px]
        flex
        items-center
        justify-between
      "
        >
            <div className="text-[18px] font-semibold">
                My App
            </div>

            <ThemeToggle />
        </nav>
    )
}
