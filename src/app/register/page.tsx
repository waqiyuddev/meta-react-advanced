"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Errors = {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
}

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState<Errors>({})

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newErrors: Errors = {}

        if (!form.name.trim()) newErrors.name = "Name is required"
        if (!form.email.trim()) newErrors.email = "Email is required"
        if (form.password.length < 6)
            newErrors.password = "Password must be at least 6 characters"
        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        console.log("Success", form)
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg">
            {/* CARD — THIS CONTROLS WIDTH */}
            <div className="">

                <p className="text-red-600 font-bold">
                    RED TEST
                </p>

                <h1 className="text-2xl font-semibold mb-6">
                    Create an Account
                </h1>

                <form className="flex flex-col gap-[16px] space-y-6" onSubmit={handleSubmit}>
                    {/* NAME */}
                    <div className="flex flex-col gap-[6px]">
                        <Label className="text-[14px] font-medium">Name <sup>*</sup></Label>
                        <Input
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                            className="h-[40px]"
                        />
                        <p className="min-h-[16px] text-[12px]  font-semibold text-red-600">
                            {errors.name}
                        </p>
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-[6px]">
                        <Label className="text-[14px] font-medium">Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            className="h-[40px]"
                        />
                        <p className="min-h-[16px] text-[12px]  font-semibold text-red-600">
                            {errors.email}
                        </p>
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col gap-[6px]">
                        <Label className="text-[14px] font-medium">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            className="h-[40px]"
                        />
                        <p className="min-h-[16px] text-[12px]  font-semibold text-red-600">
                            {errors.password}
                        </p>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="flex flex-col gap-[6px]">
                        <Label className="text-[14px] font-medium">
                            Confirm Password
                        </Label>
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="Enter your confirm password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="h-[40px]"
                        />
                        <p className="min-h-[16px] text-[12px]  font-semibold text-red-600">
                            {errors.confirmPassword}
                        </p>
                    </div>

                    <Button
                        type="submit"
                        className="w-[120px] h-[40px] mt-[8px]"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    )
}
