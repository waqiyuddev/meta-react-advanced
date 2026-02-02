"use client"

import { createContext, useContext, useState } from "react"

/* =========================
   1. CREATE CONTEXT
========================= */

type User = {
    name: string
}

type UserContextType = {
    user: User | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

/* =========================
   2. CUSTOM HOOK
========================= */

function useUser() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used inside UserProvider")
    }

    return context
}

/* =========================
   3. PROVIDER
========================= */

function UserProvider({ children }: { children: React.ReactNode }) {
    const [user] = useState<User>({
        name: "John Doe",
    })

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

/* =========================
   4. COMPONENTS
========================= */

function Header() {
    const { user } = useUser()

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
                borderBottom: "1px solid #ddd",
            }}
        >
            <h2>Little Lemon Blog</h2>
            <span>Logged in as: {user?.name}</span>
        </header>
    )
}

function BlogPage() {
    const { user } = useUser()

    return (
        <main style={{ padding: "16px" }}>
            <h3>Latest Recipe</h3>

            <h4>Lemon Pasta</h4>
            <p>
                A fresh and simple pasta made with lemon and olive oil.
            </p>

            <p>
                <strong>Author:</strong> {user?.name}
            </p>
        </main>
    )
}

/* =========================
   5. PAGE EXPORT
========================= */

export default function Page() {
    return (
        <UserProvider>
            {/* PAGE WRAPPER WITH MAX WIDTH */}
            <div
                style={{
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid #eee",
                }}
            >
                <Header />
                <BlogPage />
            </div>
        </UserProvider>
    )
}
