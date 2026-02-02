"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            alert("All field are required")
            return
        }

        if (form.password.length < 6) {
            alert("password must be at least 6 characters")
            return
        }

        if (form.password !== form.confirmPassword) {
            alert("password do not match")
            return
        }

        console.log("Registration Success:", form)

        //reset form
        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg">
            <h1 className="text-2xl font-semibold mb-6">
                Create an Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />

                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Enter your confirm password" />
                </div>

                {/* SUBMIT BUTTON */}
                <Button type="submit">Register</Button>
            </form>
        </div>
    )
}
