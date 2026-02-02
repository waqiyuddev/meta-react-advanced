import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Page() {
    return (
        <main style={{ padding: "24px" }}>
            <ThemeToggle />

            <h1 style={{ marginTop: "24px" }}>
                Hello Dark / Light Mode
            </h1>

            <p>
                This text will change color automatically.
            </p>
        </main>
    )
}
