"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackPage() {
    const [score, setScore] = useState(10)
    const [comment, setComment] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (score <= 5 && comment.length < 10) {
            alert("Please provide at least 10 characters of feedback when the score is 5 or lower.")
            return
        }

        console.log("Feedback submitted:", { score, comment })

        //reset form
        setScore(10)
        setComment("")
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg">
            <h1 className="text-2xl font-semibold mb-6">
                Little Lemon Feedback 🍋
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* SCORE */}
                <div className="space-y-2">
                    <Label htmlFor="score">
                        Score: {score} ⭐
                    </Label>

                    <Input
                        id="score"
                        type="range"
                        min={0}
                        max={10}
                        value={score}
                        onChange={(e) => setScore(Number(e.target.value))}
                    />
                </div>

                {/* COMMENT */}
                <div className="space-y-2">
                    <Label htmlFor="comment">
                        Additional Comments
                    </Label>

                    <Textarea
                        id="comment"
                        placeholder="Tell us how delicious your meal was..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                {/* SUBMIT */}
                <Button type="submit" className="w-full">
                    Submit Feedback
                </Button>
            </form>
        </div>
    )
}
